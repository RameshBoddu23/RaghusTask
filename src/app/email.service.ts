import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationIntrface } from './registration-intrface';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) { }
  getAll(payload: any) {
    return this.http.post('https://0a76-115-117-172-107.in.ngrok.io/app/getAll', payload);
  }
  create(payload: RegistrationIntrface) {
    return this.http.post('https://0a76-115-117-172-107.in.ngrok.io/app/api/v1/registration', payload);
  }
  login(payload: any) {
    return this.http.post('https://0a76-115-117-172-107.in.ngrok.io/app/api/v1/login', payload);
  }
  sendMail(paylaod: any) {
    return this.http.post('https://0a76-115-117-172-107.in.ngrok.io/app/sentMailList', paylaod);
  }
  sendfrom(payload: any) {
    return this.http.post('https://0a76-115-117-172-107.in.ngrok.io/app/fromMail', payload);
  }
  response(paylaod: any) {
    return this.http.post('https://0a76-115-117-172-107.in.ngrok.io/app/test', paylaod);
  }
}
