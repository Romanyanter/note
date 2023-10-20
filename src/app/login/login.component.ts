import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}
  passwordshow:boolean = false;
  isDone:boolean=false;
  Masg:string='';
  masgerror:boolean = false;
  loginForm:FormGroup =new FormGroup({
    email:new FormControl(null,[Validators.required , Validators.email]),
    password:new FormControl(null ,[Validators.required,Validators.maxLength(10),Validators.minLength(6)]),
  })
  Signin(loginForm:FormGroup){
    this.isDone = true;
    this._AuthService.Signin(loginForm.value).subscribe({
      next:(res)=>{
        this.isDone = false;
        console.log(res);
        localStorage.setItem('token',res.token);
        this._AuthService.decodtoken();
        this._Router.navigate(['/home'])
      },error:(err)=>{
        this.isDone=false;
        this.Masg = err.error.msg;
        this.masgerror = true
        console.log(err);
      }
    })
  }

}
