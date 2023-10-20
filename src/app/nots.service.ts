import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotsService {
  constructor(private _HttpClient:HttpClient) { }
  token:any ={
    token:'3b8ny__'+localStorage.getItem('token')
  }
  addNots(data:object):Observable<any>{
  return this._HttpClient.post('https://note-sigma-black.vercel.app/api/v1/notes/',data,{headers:this.token})
  }
  getNote():Observable<any>{
    return this._HttpClient.get('https://note-sigma-black.vercel.app/api/v1/notes/',{headers:this.token})
  }
  UpdataNote(data:object , id:string):Observable<any>{
    return this._HttpClient.put(`https://note-sigma-black.vercel.app/api/v1/notes/${id}`,data,{headers:this.token})
  }
  DeleteNote(id:string):Observable<any>{
    return this._HttpClient.delete(`https://note-sigma-black.vercel.app/api/v1/notes/${id}`,{headers:this.token})
  }
}
