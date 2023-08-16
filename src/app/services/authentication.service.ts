import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpClientService } from './http-client.service';
import { map, finalize } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClientService, private router: Router) {}


  login(userCredentials:any):any{ 
    return this.http.post('users/login', userCredentials).pipe(map(response => {
        return response
    }))
  }

  getAccessToken(token:string){
    return this.http.post('token/refresh/', {refresh: token}).pipe(map(response => {
        return response
    }))
  }

  logout(){
    console.log("hello")
    this.router.navigate(['/login']);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
}
