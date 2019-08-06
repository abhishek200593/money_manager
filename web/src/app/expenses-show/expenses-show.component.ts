import { Component, OnInit } from '@angular/core';
import Expenses from '../Expenses';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expenses-show',
  templateUrl: './expenses-show.component.html',
  styleUrls: ['./expenses-show.component.css']
})
export class ExpensesShowComponent implements OnInit {

  expenses: Expenses[];

  constructor(private es: ExpenseService) { }

  ngOnInit() {
    this.es
      .getExpenses()
      .subscribe((data: Expenses[]) => {
        this.expenses = data;
      });
  }

}
