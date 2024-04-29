// expense-table.component.ts

import { Component, Input } from '@angular/core';
import { Expense } from '../../models/financial-data';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.css']
})
export class ExpenseTableComponent {
  @Input() expenseDataSource: Expense[] = [];
  expenseColumns: string[] = ['categoria', 'descripcion', 'monto', 'fecha', 'periodo'];
}
