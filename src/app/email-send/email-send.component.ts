import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-send',
  templateUrl: './email-send.component.html',
  styleUrls: ['./email-send.component.css']
})
export class EmailSendComponent implements OnInit {
  emaildata: any;
  sendrequest:any;
  sendCustomer:any | undefined;
  constructor(private router:Router,private emailservice:EmailService) { }

  ngOnInit(): void {
    this.get()
    // this.sendReq()
    this.sendFrom();
  }
  get(){
    this.emailservice.getAll("data").subscribe((data)=>{
      debugger;
      this.emaildata = data;
      console.log(this.emaildata)
    })
  }
  sendFrom(){
    this.emailservice.sendfrom("data").subscribe((data: any)=>{
      this.sendCustomer=data['send From'][0];
      console.log(this.sendCustomer)
    })
  }
  sendReq(){
      this.emailservice.sendMail("data").subscribe((data:any)=>{
        // data.map((e:any)=>{
        //   JSON.parse(e)
        // })
        this.sendrequest=data["send to"][0]
       
        console.log("request done", this.sendrequest);
      })
  }

}
   
    
  
