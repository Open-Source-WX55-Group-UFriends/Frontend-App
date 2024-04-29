import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionsCardComponent } from './shared/components/subscriptions-card/subscriptions-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import { ImageCardComponent } from './shared/components/image-card/image-card.component';
import { PaymentSubscriptionComponent } from './public/pages/subscription/payment-subscription.component';
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatList, MatListItem} from "@angular/material/list";
import { PaymentCardComponent } from './shared/components/payment-card/payment-card.component';
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

import { StarRatingComponent} from "./shared/components/star-rating/star-rating.component";
import { ContactCardComponent } from './shared/components/contact-card/contact-card.component';
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


@NgModule({
  declarations: [
    AppComponent,
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
    TaskTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
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


  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
