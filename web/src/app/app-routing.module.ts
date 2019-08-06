import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesAddComponent } from './expenses-add/expenses-add.component';
import { ExpensesEditComponent } from './expenses-edit/expenses-edit.component';
import { ExpensesShowComponent } from './expenses-show/expenses-show.component';

const routes: Routes = [
  {
    path: 'expenses/add',
    component: ExpensesAddComponent
  },
  {
    path: 'expenses/edit',
    component: ExpensesEditComponent
  },
  {
    path: 'expenses',
    component: ExpensesShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
