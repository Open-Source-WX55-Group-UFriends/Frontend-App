// profitability-table.component.ts

import { Component, Input } from '@angular/core';
import { Profitability } from '../../models/financial-data';

@Component({
  selector: 'app-profitability-table',
  templateUrl: './profitability-table.component.html',
  styleUrls: ['./profitability-table.component.css']
})
export class ProfitabilityTableComponent {
  @Input() profitabilityDataSource: Profitability[] = [];
  profitabilityColumns: string[] = ['producto', 'margen'];
}
