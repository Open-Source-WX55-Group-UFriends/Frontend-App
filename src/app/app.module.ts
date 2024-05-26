import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionsCardComponent } from '../subscription/components/subscriptions-card/subscriptions-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
//Feature Components Imports
import { IncomeTableComponent } from './financial-stats/components/income-table/income-table.component';
import { ExpenseTableComponent } from './financial-stats/components/expense-table/expense-table.component';
import { ProfitabilityTableComponent } from './financial-stats/components/profitability-table/profitability-table.component';
//Angular Material Imports
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import { ImageCardComponent } from './public/components/image-card/image-card.component';
import { PaymentSubscriptionComponent } from './register/components/profile-page/payment/payment-subscription.component';
import {MatList, MatListItem} from "@angular/material/list";
import { PaymentCardComponent } from '../subscription/components/payment-card/payment-card.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {NgOptimizedImage} from "@angular/common";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {Toolbar} from './public/components/toolbar/toolbar.component';
import { Footer } from './public/components/footer/footer.component';
import { HomeComponent } from './public/pages/home/home.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";

import { StarRatingComponent} from "./social-interaction/components/star-rating/star-rating.component";
import { ContactCardComponent } from './social-interaction/components/contact-card/contact-card.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { DescriptionCardComponent } from './shared/components/shed-summary/description-card.component';
import { FarmCardsComponent } from './shared/components/farm-cards/farm-cards.component';
import { DescriptionShedComponent } from './shared/components/descriptions-sheds-card/description-shed/description-shed.component';
import {TaskFormComponent} from "./task/components/task-form/task-form.component";
import {TaskTableComponent} from "./task/components/task-table/task-table.component";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {LoginCardComponent} from "./register/components/login-card/login-card.component";
import {RegisterCardComponent} from "./register/components/register-card/register-card.component";
import {MatCheckbox, MatCheckboxModule} from "@angular/material/checkbox";
//Service Imports
import {FinancialStatsService} from "./financial-stats/services/financial-stats.service";
import {FinancialStatsPageComponent} from "./financial-stats/pages/financial-stats-page/financial-stats-page.component";
import {FormsModule} from "@angular/forms";
import { CreateProfileComponent } from './register/components/profile-page/create-profile/create-profile.component';
import { EditProfileComponent } from './register/components/profile-page/edit-profile/edit-profile.component';
import { PaySubscriptionComponent } from './register/components/profile-page/subscription/pay-subscription.component';
import { ToolbarColaboratorComponent } from './public/components/toolbar-colab/toolbar-colaborator-component/toolbar-colaborator.component';
import { ToolbarFarmComponent } from './public/components/toolbar-Farm/toolbar-farm/toolbar-farm.component';



@NgModule({
  declarations: [
    AppComponent,
    IncomeTableComponent,
    ExpenseTableComponent,
    ProfitabilityTableComponent,
    FinancialStatsPageComponent,
    Toolbar,
    StarRatingComponent,
    ContactCardComponent,
    DescriptionCardComponent,
    FarmCardsComponent,
    SubscriptionsCardComponent,
    ImageCardComponent,
    PaymentSubscriptionComponent,
    PaymentCardComponent,
    Toolbar,
    Footer,
    HomeComponent,
    DescriptionShedComponent,
    TaskFormComponent,
    TaskTableComponent,
    LoginCardComponent,
    RegisterCardComponent,
    ProfitabilityTableComponent,
     FinancialStatsPageComponent,
    FinancialStatsPageComponent,
    CreateProfileComponent,
    EditProfileComponent,
    PaySubscriptionComponent,
    ToolbarColaboratorComponent,
    ToolbarFarmComponent,
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
    MatInputModule,
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatCardTitle,
    HttpClientModule,
    MatPaginatorModule,
    MatList,
    MatListItem,
    MatSnackBarModule,
    MatButtonModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    NgOptimizedImage,
    MatToolbar,
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatCheckbox,
    FormsModule,
    MatCheckboxModule


  ],
  providers: [
    provideAnimationsAsync(),
    FinancialStatsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
