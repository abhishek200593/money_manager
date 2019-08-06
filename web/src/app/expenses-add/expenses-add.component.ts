import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expenses-add',
  templateUrl: './expenses-add.component.html'
})
export class ExpensesAddComponent implements OnInit {

  addForm: FormGroup;
  constructor(private fb: FormBuilder, private es: ExpenseService) {
    this.createForm();
  }

  createForm() {
    this.addForm = this.fb.group({
      expense_for: ['', Validators.required],
      expense_amount: ['', Validators.required],
      note: ['']
    });
  }

  addExpense(expense_for, expense_amount, note) {
    this.es.addExpense(expense_for, expense_amount, note);
  }

  ngOnInit() {
  }

}
