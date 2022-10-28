import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EmailService } from './email.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule,FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { EmailSendComponent } from './email-send/email-send.component';
import { EmailRespondComponent } from './email-respond/email-respond.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CreateAccountComponent } from './create-account/create-account.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    EmailSendComponent,
    EmailRespondComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,  
    MatFormFieldModule,
    NgxPaginationModule,
    Ng2SearchPipeModule  
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
