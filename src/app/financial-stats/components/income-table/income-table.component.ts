// income-table.component.ts

import { Component, Input } from '@angular/core';
import { Income } from '../../models/financial-data';

@Component({
  selector: 'app-income-table',
  templateUrl: './income-table.component.html',
  styleUrls: ['./income-table.component.css']
})
export class IncomeTableComponent {
  @Input() incomeDataSource: Income[] = [];
  incomeColumns: string[] = ['categoria', 'descripcion', 'monto', 'fecha', 'periodo'];
}
