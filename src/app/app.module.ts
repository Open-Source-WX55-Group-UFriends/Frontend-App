import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
//Feature Components Imports
import { IncomeTableComponent } from './financial-stats/components/income-table/income-table.component';
import { ExpenseTableComponent } from './financial-stats/components/expense-table/expense-table.component';
import { ProfitabilityTableComponent } from './financial-stats/components/profitability-table/profitability-table.component';
//Angular Material Imports
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
//Service Imports
import {FinancialStatsService} from "./financial-stats/services/financial-stats.service";
import {FinancialStatsPageComponent} from "./financial-stats/pages/financial-stats-page/financial-stats-page.component";



@NgModule({
  declarations: [
    AppComponent,
    IncomeTableComponent,
    ExpenseTableComponent,
    ProfitabilityTableComponent,
    FinancialStatsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,

  ],
  providers: [
    provideAnimationsAsync(),
    FinancialStatsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
