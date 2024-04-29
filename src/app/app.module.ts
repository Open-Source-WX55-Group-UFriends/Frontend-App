import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskTableComponent } from './task/components/task-table/task-table.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatTabsModule} from "@angular/material/tabs";
import { TaskFormComponent } from './task/components/task-form/task-form.component';
import {MatToolbar} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    TaskTableComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormField,
    MatOption,
    MatSelect,
    MatLabel,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    MatToolbar,

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
