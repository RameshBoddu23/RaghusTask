import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-respond',
  templateUrl: './email-respond.component.html',
  styleUrls: ['./email-respond.component.css']
})
export class EmailRespondComponent implements OnInit {
  emaildata: any;
  readResponse:any;
  filterTerm!: string;
  constructor(private _router:Router,private emailservice:EmailService) { }

  ngOnInit(): void {
    this.get();
    this.readRes();
  }
  get(){
    this.emailservice.get().subscribe((data: any)=>{
      debugger;
      this.emaildata = data;
      console.log(this.emaildata)
    })
  }
    
    readRes(){
      this.emailservice.response().subscribe((data:any)=>{
        // data.map((e:any)=>{
        //   JSON.parse(e)
        // })
        this.readResponse=data["response"] ?? [];
        console.log("res", this.readResponse);
      })
  }

}
   