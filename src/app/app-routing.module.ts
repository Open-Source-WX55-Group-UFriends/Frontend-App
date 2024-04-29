import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskTableComponent} from "./task/components/task-table/task-table.component";
import {TaskFormComponent} from "./task/components/task-form/task-form.component";

const routes: Routes = [
  {path: 'tasks', component:TaskTableComponent },
  {path: 'tasks/create', component:TaskFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
