import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubscriptionsCardComponent} from "./shared/components/subscriptions-card/subscriptions-card.component";
import {PaymentSubscriptionComponent} from "./shared/pages/subscription/payment-subscription.component";

const routes: Routes = [
  {path: 'subscriptions-card', component:SubscriptionsCardComponent },
  {path: 'subscription/:card', component:PaymentSubscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
