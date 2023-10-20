import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  flage:boolean = false;
  constructor(private _AuthService:AuthService,private _Router:Router) {}
  checkout(){
    this._AuthService.token.subscribe({
      next:()=>{
        if(this._AuthService.token.getValue()!==null){
          this.flage = true
        }else{
          this.flage = false 
        }
      }
    })
  }
  ngOnInit(): void {    
    this.checkout()
  }
  Logout(){
    this._AuthService.logout();

  }
}
