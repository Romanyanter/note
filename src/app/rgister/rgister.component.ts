import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rgister',
  templateUrl: './rgister.component.html',
  styleUrls: ['./rgister.component.css']
})
export class RgisterComponent {
  constructor(private _AuthService:AuthService,private _Router:Router){}
  isDone:boolean = false;
  isMsg:String='';
  isapper:boolean = false;
  passwordshow:boolean = false;
  SignUpFrom:FormGroup = new FormGroup({
    name:new FormControl(null , [Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
    email:new FormControl(null , [Validators.required ,Validators.email]),
    password:new FormControl(null , [Validators.required,Validators.maxLength(10),Validators.minLength(6)]),
    age:new FormControl(null,[Validators.required]),
    phone:new FormControl(null, [Validators.required,Validators.pattern(/^01[0125][0-9]{8}/)]),
  })
  SignUp(SignUpFrom:FormGroup){
    this.isDone = true;
    
    this._AuthService.SignUp(SignUpFrom.value).subscribe({
      next:(res)=>{
        console.log(res.user);
        this.isDone = false;
        this._Router.navigate(['/login'])
      },error:(err)=>{
        console.log(err);
        this.isDone = false;
        this.isapper = true;
        this.isMsg = err.error.msg
      }
    })

  }

}
