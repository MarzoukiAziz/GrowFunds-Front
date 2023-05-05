import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }
  signOut(): void {
    window.sessionStorage.clear();
  }

  public getToken(): any {
    const  s = window.sessionStorage.getItem(TOKEN_KEY)

    return s;
  }

  public getUser(): any {
    var s=sessionStorage.getItem(USER_KEY);
    if (s==null){
      s=""
    }
    return JSON.parse(s);
  }

}
