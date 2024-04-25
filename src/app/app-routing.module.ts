import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubscriptionsCardComponent} from "./shared/components/subscriptions-card/subscriptions-card.component";
import {SubscriptionComponent} from "./shared/pages/subscription/subscription.component";

const routes: Routes = [
  {path: 'subscriptions-card', component:SubscriptionsCardComponent },
  {path: 'subscription/:card', component:SubscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
