import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
