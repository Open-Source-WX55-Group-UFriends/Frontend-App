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

  filteredIncomeDataSource: Income[] = [];
  filteredExpenseDataSource: Expense[] = [];
  selectedIncomeCategory: string = 'all';
  selectedIncomePeriod: string = 'all';
  selectedExpenseCategory: string = 'all';
  selectedExpensePeriod: string = 'all';

  constructor(private financialStatsService: FinancialStatsService) { }

  ngOnInit(): void {
    this.getIncomeData();
    this.getExpenseData();
    this.getProfitabilityData();
  }

  getIncomeData(): void {
    this.financialStatsService.getIncomeData().subscribe((data: Income[]) => {
      this.incomeDataSource = data;
      this.applyFilters();
    });
  }

  getExpenseData(): void {
    this.financialStatsService.getExpenseData().subscribe((data: Expense[]) => {
      this.expenseDataSource = data;
      this.applyFilters();
    });
  }

  getProfitabilityData(): void {
    this.financialStatsService.getProfitabilityData().subscribe((data: Profitability[]) => {
      this.profitabilityDataSource = data;
    });
  }

  applyFilters(): void {
    this.financialStatsService.getFilteredIncomeData(this.selectedIncomeCategory, this.selectedIncomePeriod)
      .subscribe((data: Income[]) => {
        this.filteredIncomeDataSource = data;
        this.calculateTotals();
      });

    this.financialStatsService.getFilteredExpenseData(this.selectedExpenseCategory, this.selectedExpensePeriod)
      .subscribe((data: Expense[]) => {
        this.filteredExpenseDataSource = data;
        this.calculateTotals();
      });
  }

  calculateTotals(): void {
    this.totalIncome = this.filteredIncomeDataSource.reduce((sum, income) => sum + income.monto, 0);
    this.totalExpenses = this.filteredExpenseDataSource.reduce((sum, expense) => sum + expense.monto, 0);
    this.profitMargin = this.totalIncome - this.totalExpenses;
    this.profitPercentage = ((this.profitMargin / this.totalIncome) * 100).toFixed(2) + '%';
  }
}
