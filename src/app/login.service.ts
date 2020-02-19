import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _isLoggedIn: boolean = false;

  get isLoggedIn(): boolean { 
    console.log('returning isLoggedIn:'+this._isLoggedIn);
    return this._isLoggedIn; }
  set isLoggedIn(value: boolean) { 
    console.log('setting isLoggedIn:'+value);
    this._isLoggedIn = value; 
  }

  constructor() { }
}
