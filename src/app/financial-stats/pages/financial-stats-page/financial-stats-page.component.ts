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

  // Datos para el gráfico de línea de tendencia mensual de ingresos y gastos
  lineChartData: any[] = [];

  // Datos para el gráfico de anillos de % de ingresos por categoría
  doughnutChartData: any[] = [];

  // Datos para el gráfico de barras de gastos por categoría
  barChartData: any[] = [];

  // Datos para el gráfico de línea del margen de beneficio mensual
  profitMarginData: any[] = [];

  constructor(private financialStatsService: FinancialStatsService) { }

  ngOnInit(): void {
    this.getIncomeData();
    this.getExpenseData();
    this.getProfitabilityData();
    this.getChartData();
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

  getChartData(): void {
    // Obtener datos para el gráfico de línea de tendencia mensual de ingresos y gastos
    this.financialStatsService.getMonthlyData().subscribe((data: any[]) => {
      this.lineChartData = data;
    });

    // Obtener datos para el gráfico de anillos de % de ingresos por categoría
    this.financialStatsService.getIncomeCategoryPercentage().subscribe((data: any[]) => {
      this.doughnutChartData = data;
    });

    // Obtener datos para el gráfico de barras de gastos por categoría
    this.financialStatsService.getExpenseCategoryData().subscribe((data: any[]) => {
      this.barChartData = data;
    });

    // Obtener datos para el gráfico de línea del margen de beneficio mensual
    this.financialStatsService.getMonthlyProfitMarginData().subscribe((data: any[]) => {
      this.profitMarginData = data;
    });
  }

  applyFilters(type: string, category: string, period: string): void {
    if (type === 'ingresos') {
      this.financialStatsService.getFilteredIncomeData(category, period).subscribe((data: Income[]) => {
        this.incomeDataSource = data;
        this.calculateTotals();
      });
    } else if (type === 'gastos') {
      this.financialStatsService.getFilteredExpenseData(category, period).subscribe((data: Expense[]) => {
        this.expenseDataSource = data;
        this.calculateTotals();
      });
    }
  }
}
