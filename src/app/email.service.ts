import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get('http://localhost:8080/app/getAll');
  }

  sendMail(){
    return this.http.get('http://localhost:8080/app/sendMail');
  }
  sendfrom(): any{
    return this.http.get('http://localhost:8080/app/fromMail');
  }
  response(){
    return this.http.get("http://localhost:8080/app/test");
  }
}
