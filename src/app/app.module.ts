import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskFormComponent } from './task/components/task-form/task-form.component';
import { TaskTableComponent } from './task/components/task-table/task-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
