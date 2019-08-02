import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseAddComponent } from './expense-add/expense-add.component';
import { ExpenseEditComponent } from './expense-edit/expense-edit.component';
import { ExpenseGetComponent } from './expense-get/expense-get.component';

const routes: Routes = [
  {
    path: 'expense/create',
    component: ExpenseAddComponent
  },
  {
    path: 'expense/edit/:id',
    component: ExpenseEditComponent
  },
  {
    path: 'expense',
    component: ExpenseGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
