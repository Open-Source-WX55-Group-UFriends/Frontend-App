import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

// Angular Material Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';

// Feature Components Imports
import {HomeComponent} from "./public/pages/home/home.component";
import { FinancialStatsPageComponent } from './financial-stats/pages/financial-stats-page/financial-stats-page.component';
import { StarRatingComponent } from './social-interaction/components/star-rating/star-rating.component';
import { ContactCardComponent } from './social-interaction/components/contact-card/contact-card.component';
import { DescriptionShedComponent } from './shared/components/descriptions-sheds-card/description-shed/description-shed.component';
import { TaskFormComponent } from './task/components/task-form/task-form.component';
import { TaskTableComponent } from './task/components/task-table/task-table.component';
import { LoginCardComponent } from './register/components/login-card/login-card.component';
import { CreateProfileComponent } from './register/components/profile-page/create-profile/create-profile.component';
import { EditProfileComponent } from './register/components/profile-page/edit-profile/edit-profile.component';
import { PaySubscriptionComponent } from './register/components/profile-page/subscription/pay-subscription.component';
import { ToolbarFarmComponent } from './public/components/toolbar-Farm/toolbar-farm/toolbar-farm.component';
import { ShedFormComponent } from './task/components/shed-form/shed-form/shed-form.component';
import { ProfileFarmComponent } from './profile-farm/profile-farm/profile-farm.component';
import { FooterHomeComponent } from './public/components/footer-home/footer-home.component';
import { RoleProfileComponent } from './register/components/profile-page/role-profile/role-profile.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { WeatherComponent } from './weather/components/weather/weather.component';
import { DetailedMonitoringComponent } from './task/components/detailed-monitoring/detailed-monitoring.component';
import { AddAnimalsComponent } from './monitoring/pages/add-animals/add-animals.component';
import { AnimalInventoryComponent } from './monitoring/pages/animal-inventory/animal-inventory.component';
import { FeedingRecordComponent } from './monitoring/pages/feeding-record/feeding-record.component';
import { CultivationRecordComponent } from './monitoring/pages/cultivation-record/cultivation-record.component';
import { CropInventoryComponent } from './monitoring/pages/crop-inventory/crop-inventory.component';
import { ListShedsComponent } from './monitoring/pages/list-sheds/list-sheds.component';
import { AddShedsComponent } from './monitoring/pages/add-sheds/add-sheds.component';
import { Footer } from './public/components/footer/footer.component';
import { PaymentCardComponent } from './public/components/payment-card/payment-card.component';
import { SubscriptionsCardComponent} from "./public/components/subscriptions-card/subscriptions-card.component";
import {PaymentSubscriptionComponent} from "./register/components/profile-page/payment/payment-subscription.component";


// Service Imports
import { FinancialStatsService } from './financial-stats/services/financial-stats.service';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {
  DetailedMonitoringFarmerComponent
} from "./monitoring/detailed-monitoring-farmer/detailed-monitoring-farmer.component";
import { SumaryComponent } from './financial-stats/pages/sumary/sumary.component';
import { EmployeeComponent } from './monitoring/employee/employee.component';
import { AddEmployeeComponent } from './monitoring/add-employee/add-employee.component';
import { EmergencyComponent } from './monitoring/emergency/emergency.component';
import { DashboardTaskComponent } from './monitoring/dashboard-task/dashboard-task.component';
import { EditFarmComponent } from './edit-farm/edit-farm.component';
import { AuthenticationSectionComponent } from './register/components/authentication-section/authentication-section.component';
import {provideNativeDateAdapter} from "@angular/material/core";
import {AuthenticationInterceptor} from "./register/services/authentication.interceptor.service";

@NgModule({
  declarations: [
    AppComponent,

    FinancialStatsPageComponent,
    StarRatingComponent,
    ContactCardComponent,
    DescriptionShedComponent,
    TaskFormComponent,
    TaskTableComponent,
    LoginCardComponent,
    CreateProfileComponent,
    EditProfileComponent,
    PaySubscriptionComponent,
    ToolbarFarmComponent,
    ShedFormComponent,
    ProfileFarmComponent,
    FooterHomeComponent,
    RoleProfileComponent,
    PageNotFoundComponent,
    WeatherComponent,
    DetailedMonitoringComponent,
    AddAnimalsComponent,
    AnimalInventoryComponent,
    FeedingRecordComponent,
    CultivationRecordComponent,
    CropInventoryComponent,
    ListShedsComponent,
    AddShedsComponent,
    Footer,
    PaymentCardComponent,
    FooterHomeComponent,
    ToolbarFarmComponent,
    HomeComponent,
    SubscriptionsCardComponent,
    PaymentSubscriptionComponent,
    DetailedMonitoringFarmerComponent,
    SumaryComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    EmergencyComponent,
    DashboardTaskComponent,
    EditFarmComponent,
    AuthenticationSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
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
    MatSnackBarModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatExpansionModule
  ],
  providers: [
    provideAnimationsAsync(),
    FinancialStatsService,
    provideNativeDateAdapter(),
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthenticationInterceptor,
      multi:true
    }
  ],
  exports: [
    PaymentCardComponent,
    FooterHomeComponent,
    ToolbarFarmComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
