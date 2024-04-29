import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubscriptionsCardComponent} from "./shared/components/subscriptions-card/subscriptions-card.component";
import {PaymentSubscriptionComponent} from "./public/pages/subscription/payment-subscription.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {
  DescriptionShedComponent
} from "./shared/components/descriptions-sheds-card/description-shed/description-shed.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'subscriptions/card', component:SubscriptionsCardComponent },
  {path: 'subscriptions/:card', component:PaymentSubscriptionComponent },
  {path: 'descriptions/:shed', component:DescriptionShedComponent },
  {path: 'home', component:HomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
