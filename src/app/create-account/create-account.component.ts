import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from '../email.service';
import { RegistrationIntrface } from '../registration-intrface';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private emailService: EmailService, private router: Router) {
    this.rform=new FormGroup({
      username: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    }
    )
   }
public error:any;
  createAccount: RegistrationIntrface = {
    username: '',
    email: '',
    password: '',

  }
  rform!:FormGroup;

  ngOnInit(): void {
  }
  createAccout(){
    this.emailService.create(this.rform.value).subscribe({
      next:(data:any)=>{
       
        console.log(data.response)
      },
      error:(err)=>{
        console.log(err);
      this.error=err;
        console.log(this.error)
      }
    })
    alert('You have Registered successfully, Please login to Continue')
    this.router.navigate(['Login']);
  }

}
