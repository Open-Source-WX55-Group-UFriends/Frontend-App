import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FinancialStatsPageComponent} from "./financial-stats/pages/financial-stats-page/financial-stats-page.component";
import {SubscriptionsCardComponent} from "./public/components/subscriptions-card/subscriptions-card.component";
import {PaymentSubscriptionComponent} from "./register/components/profile-page/payment/payment-subscription.component";
import {HomeComponent} from "./public/pages/home/home.component";
import { DescriptionShedComponent } from "./shared/components/descriptions-sheds-card/description-shed/description-shed.component";
import {TaskTableComponent} from "./task/components/task-table/task-table.component";
import {TaskFormComponent} from "./task/components/task-form/task-form.component";
import {RegisterCardComponent} from "./register/components/register-card/register-card.component";
import {LoginCardComponent} from "./register/components/login-card/login-card.component";
import {CreateProfileComponent} from "./register/components/profile-page/create-profile/create-profile.component";
import {EditProfileComponent} from "./register/components/profile-page/edit-profile/edit-profile.component";
import {PaySubscriptionComponent} from "./register/components/profile-page/subscription/pay-subscription.component";
import {ProfileFarmComponent} from "./profile-farm/profile-farm/profile-farm.component";
import {RoleProfileComponent} from "./register/components/profile-page/role-profile/role-profile.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {DetailedMonitoringComponent} from "./task/components/detailed-monitoring/detailed-monitoring.component";
import {WeatherComponent} from "./weather/components/weather/weather.component";
import {AddAnimalsComponent} from "./monitoring/pages/add-animals/add-animals.component";
import{AddShedsComponent} from "./monitoring/pages/add-sheds/add-sheds.component";
import {AnimalInventoryComponent} from "./monitoring/pages/animal-inventory/animal-inventory.component";
import{CropInventoryComponent} from "./monitoring/pages/crop-inventory/crop-inventory.component";
import{CultivationRecordComponent} from "./monitoring/pages/cultivation-record/cultivation-record.component";
import {FeedingRecordComponent} from "./monitoring/pages/feeding-record/feeding-record.component";
import {ListShedsComponent} from "./monitoring/pages/list-sheds/list-sheds.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'subscriptions/card', component:SubscriptionsCardComponent },
  {path: 'subscriptions/:card', component:PaymentSubscriptionComponent },
  { path: 'descriptions/:id', component: DescriptionShedComponent },
  {path: 'home', component:HomeComponent },
  {path: 'tasks', component:TaskTableComponent },
  {path: 'tasks/create', component:TaskFormComponent }  ,
  {path: 'register', component:RegisterCardComponent },
  {path: 'login', component:LoginCardComponent },
  {path: 'create-profile', component:CreateProfileComponent },
  {path: 'edit-profile', component:EditProfileComponent },
  {path: 'create/subscriptions/card', component:PaySubscriptionComponent },
  {path: 'profile-farm', component:ProfileFarmComponent},
  {path: 'role-profile', component:RoleProfileComponent},
  { path: 'financial-stats', component: FinancialStatsPageComponent },
  {path: 'detailed-monitoring', component:DetailedMonitoringComponent},
  {path: 'weather', component:WeatherComponent},
  {path: 'monitoring/add-animals', component:AddAnimalsComponent},
  {path: 'monitoring/add-sheds', component:AddShedsComponent},
  {path: 'monitoring/animal-inventory', component:AnimalInventoryComponent},
  {path: 'monitoring/crop-inventory', component:CropInventoryComponent},
  {path: 'monitoring/cultivation-record', component:CultivationRecordComponent},
  {path: 'monitoring/feeding-record', component:FeedingRecordComponent},
  {path: 'monitoring/list-sheds', component:ListShedsComponent},
  {path: '**', component:PageNotFoundComponent},

 // { path: '', redirectTo: 'financial-stats', pathMatch: 'full'},
 // { path: '**', redirectTo: 'financial-stats' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
