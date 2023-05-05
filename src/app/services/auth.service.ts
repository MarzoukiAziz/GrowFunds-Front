import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url!: string;
  url!: string;
 
  constructor(private http: HttpClient) {
    this.api_url = environment.apiserver;
  }

  signup(user: User): Observable<any> {
    this.url = this.api_url + "/signup";
    return this.http.post<User>(this.url, {
      username: user.username,
      email: user.email,
      cin:user.cin,
      password: user.password
    }, httpOptions).pipe(
      catchError(err => {
        console.error(err);
        return of(null);
      })
    );
  }

  login(credentials: {username: string, password: string}): Observable<any> {
    this.url=this.api_url + "/signin";
    return this.http.post(this.url , {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }
}


