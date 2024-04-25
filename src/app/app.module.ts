import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubscriptionsCardComponent } from './shared/components/subscriptions-card/subscriptions-card.component';
import {NgOptimizedImage} from "@angular/common";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import { ImageCardComponent } from './shared/components/image-card/image-card.component';
import { SubscriptionComponent } from './shared/pages/subscription/subscription.component';
import {HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatList, MatListItem} from "@angular/material/list";
import {ActivatedRoute} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionsCardComponent,
    ImageCardComponent,
    SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatCardTitle,
    MatToolbar,
    HttpClientModule,
    MatInputModule,
    MatPaginatorModule,
    MatList,
    MatListItem,

  ],
  providers: [
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
