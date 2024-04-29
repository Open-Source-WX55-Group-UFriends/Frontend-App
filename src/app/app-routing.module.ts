import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FinancialStatsPageComponent} from "./financial-stats/pages/financial-stats-page/financial-stats-page.component";

const routes: Routes = [
  { path: 'financial-stats', component: FinancialStatsPageComponent },
  { path: '', redirectTo: 'financial-stats', pathMatch: 'full'},
  { path: '**', redirectTo: 'financial-stats' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
