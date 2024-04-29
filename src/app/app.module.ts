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
import {FarmCards} from './shared/components/farm-cards/farm-cards.component';
import { HomeComponent } from './public/pages/home/home.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { StarRatingComponent} from "./public/components/star-rating/star-rating.component";
import { ContactCardComponent } from './public/components/contact-card/contact-card.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { DescriptionCardComponent } from './public/components/description-card/description-card.component';
import { FarmCardsComponent } from './public/components/farm-cards/farm-cards.component';


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
    FarmCards,
    HomeComponent,

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



  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
