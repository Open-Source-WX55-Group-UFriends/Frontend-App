import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubscriptionsCardComponent} from "../subscription/components/subscriptions-card/subscriptions-card.component";
import {PaymentSubscriptionComponent} from "./public/pages/subscription/payment-subscription.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {
  DescriptionShedComponent
} from "./shared/components/descriptions-sheds-card/description-shed/description-shed.component";
import {TaskTableComponent} from "./task/components/task-table/task-table.component";
import {TaskFormComponent} from "./task/components/task-form/task-form.component";
import {RegisterCardComponent} from "./register/components/register-card/register-card.component";
import {LoginCardComponent} from "./register/components/login-card/login-card.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'subscriptions/card', component:SubscriptionsCardComponent },
  {path: 'subscriptions/:card', component:PaymentSubscriptionComponent },
  {path: 'descriptions/:shed', component:DescriptionShedComponent },
  {path: 'home', component:HomeComponent },
  {path: 'tasks', component:TaskTableComponent },
  {path: 'tasks/create', component:TaskFormComponent }  ,
  {path: 'register', component:RegisterCardComponent },
  {path: 'login', component:LoginCardComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
