import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import  JwtDecode  from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem('token')!=null){
      this.decodtoken();
    }else{
    this._Router.navigate(['/login'])
    }

  }
  token=new BehaviorSubject(null);
  decodtoken(){
    let encode = JSON.stringify(localStorage.getItem('token'));
    let decode:any = JwtDecode(encode);
    console.log(decode);
    this.token.next(decode)
  }
  SignUp(data:Object):Observable<any>{
  return this._HttpClient.post('https://note-sigma-black.vercel.app/api/v1/users/signUp',data)
  }
  Signin(data:object):Observable<any>{
  return this._HttpClient.post('https://note-sigma-black.vercel.app/api/v1/users/signin',data)
  }
  logout(){
    this.token.next(null);
    localStorage.removeItem('token');
    this._Router.navigate(['/login'])
  }

}
