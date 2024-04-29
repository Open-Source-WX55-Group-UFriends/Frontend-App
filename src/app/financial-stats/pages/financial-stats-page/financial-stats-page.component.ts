import { Component, OnInit } from '@angular/core';
import { FinancialStatsService } from '../../services/financial-stats.service';
import { Income, Expense, Profitability } from '../../models/financial-data';

@Component({
  selector: 'app-financial-stats-page',
  templateUrl: './financial-stats-page.component.html',
  styleUrls: ['./financial-stats-page.component.css']
})
export class FinancialStatsPageComponent implements OnInit {
  totalIncome: number = 0;
  totalExpenses: number = 0;
  profitMargin: number = 0;
  profitPercentage: string = '';

  incomeDataSource: Income[] = [];
  expenseDataSource: Expense[] = [];
  profitabilityDataSource: Profitability[] = [];

  constructor(private financialStatsService: FinancialStatsService) { }

  ngOnInit(): void {
    this.getIncomeData();
    this.getExpenseData();
    this.getProfitabilityData();
  }

  getIncomeData(): void {
    this.financialStatsService.getIncomeData().subscribe((data: Income[]) => {
      this.incomeDataSource = data;
      this.calculateTotals();
    });
  }

  getExpenseData(): void {
    this.financialStatsService.getExpenseData().subscribe((data: Expense[]) => {
      this.expenseDataSource = data;
      this.calculateTotals();
    });
  }

  getProfitabilityData(): void {
    this.financialStatsService.getProfitabilityData().subscribe((data: Profitability[]) => {
      this.profitabilityDataSource = data;
    });
  }

  calculateTotals(): void {
    this.totalIncome = this.incomeDataSource.reduce((sum, income) => sum + income.monto, 0);
    this.totalExpenses = this.expenseDataSource.reduce((sum, expense) => sum + expense.monto, 0);
    this.profitMargin = this.totalIncome - this.totalExpenses;
    this.profitPercentage = ((this.profitMargin / this.totalIncome) * 100).toFixed(2) + '%';
  }

  applyFilters(type: string, category: string, period: string): void {
    // Aplica los filtros seleccionados a los datos de ingresos o gastos
    // Puedes modificar este método según tus necesidades específicas de filtrado
    console.log(`Aplicando filtros: Tipo - ${type}, Categoría - ${category}, Período - ${period}`);

    if (type === 'ingresos') {
      // Lógica para filtrar los datos de ingresos según la categoría y el período seleccionados
      // Puedes utilizar el servicio financialStatsService para obtener los datos filtrados
      // y actualizar la propiedad incomeDataSource con los nuevos datos
    } else if (type === 'gastos') {
      // Lógica para filtrar los datos de gastos según la categoría y el período seleccionados
      // Puedes utilizar el servicio financialStatsService para obtener los datos filtrados
      // y actualizar la propiedad expenseDataSource con los nuevos datos
    }
  }
}
