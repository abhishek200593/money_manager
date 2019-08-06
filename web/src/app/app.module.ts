import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesAddComponent } from './expenses-add/expenses-add.component';
import { ExpensesEditComponent } from './expenses-edit/expenses-edit.component';
import { ExpensesShowComponent } from './expenses-show/expenses-show.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExpenseService } from './expense.service';

@NgModule({
  declarations: [
    AppComponent,
    ExpensesAddComponent,
    ExpensesEditComponent,
    ExpensesShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ExpenseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
