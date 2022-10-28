import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { EmailRespondComponent } from './email-respond/email-respond.component';
import { EmailSendComponent } from './email-send/email-send.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'',component:LoginComponent},
  {path:'Login',component:LoginComponent},
  {path:'Header',component:HeaderComponent},
  {path:'Email-Send',component:EmailSendComponent},
  {path:'Email-Respond',component:EmailRespondComponent},
  {path:'create', component:CreateAccountComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
