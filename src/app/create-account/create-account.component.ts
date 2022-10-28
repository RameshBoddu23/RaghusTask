import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../email.service';
import { RegistrationIntrface } from '../registration-intrface';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor(private emailService: EmailService, private router: Router) { }

  createAccount: RegistrationIntrface = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  ngOnInit(): void {
  }
  createAccout(){
    this.emailService.create(this.createAccount).subscribe({
      next:(data:any)=>{
        this.router.navigate(['Login'])
      },
      error:(err)=>{
        console.log(err);
      }
    })
    alert('You have Registered successfully, Please login to Continue')
  }

}
