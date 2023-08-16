import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}
  createHeader() {
    let header = new HttpHeaders();
    return header;
  }

  get() {}

  post(url: string, body: any):any {
    let authToken: any = {
      headers: this.createHeader(),
      responseType: 'json',
    };

    return this.http.post(API_URL + url, body, authToken);
  }

  put() {}

  delete() {}
}
