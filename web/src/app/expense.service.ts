import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// tslint:disable-next-line:no-inferrable-types
const API_URL: string = 'http://localhost:4000/expenses';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }

  getExpenses() {
    return this
            .http
            .get(API_URL)
  }

  addExpense(expense_for, expense_amount, note) {
    const obj = {
      expense_for: expense_for,
      expense_amount: expense_amount,
      note: note
    };
    console.log(obj);
    this.http.post(API_URL + '/add', obj)
      .subscribe(res => console.log('Done'));
  }
}
