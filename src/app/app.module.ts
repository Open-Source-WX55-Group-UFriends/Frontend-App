import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinancialStatsPageComponent } from './financial-stats/pages/financial-stats-page/financial-stats-page.component';
import { IncomeTableComponent } from './financial-stats/components/income-table/income-table.component';
import { ExpenseTableComponent } from './financial-stats/components/expense-table/expense-table.component';
import { ProfitabilityTableComponent } from './financial-stats/components/profitability-table/profitability-table.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    FinancialStatsPageComponent,
    IncomeTableComponent,
    ExpenseTableComponent,
    ProfitabilityTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
