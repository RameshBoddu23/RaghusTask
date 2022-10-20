import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSubmitted: boolean = false;
  isValidUser: boolean = false;


  form: FormGroup = new FormGroup({});
  loginForm: FormGroup | any;
  title = 'material-login';
  constructor(
    private fb: FormBuilder,
    private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),

      password: new FormControl('', [Validators.required, Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )])
    });
  }
  ngOnInit(): void {
  }
  onSubmit() {

    this.router.navigate(['/Home'])
  }

  forgotPassword() {
    alert("Password reset link sent to your registered Email")
  }
  createAccount() {
    alert("Create your account")
  }



}