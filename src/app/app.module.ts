import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
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


@NgModule({
  declarations: [
    AppComponent,
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
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatCardTitle,
    HttpClientModule,
    MatInputModule,
    MatPaginatorModule,
    MatList,
    MatListItem,
    MatSnackBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgOptimizedImage,
    MatToolbar,



  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
