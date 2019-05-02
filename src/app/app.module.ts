import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material.module';

import { AppComponent } from './app.component';
import { TasksTableComponent } from './components/tasks-table/tasks-table.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { CreateTasksListComponent } from './components/create-tasks-list/create-tasks-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TasksListDialogComponent } from './components/tasks-list-dialog/tasks-list-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksTableComponent,
    TasksListComponent,
    CreateTasksListComponent,
    TasksListDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
