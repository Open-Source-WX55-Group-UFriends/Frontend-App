import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Income, Expense, Profitability } from '../models/financial-data';

@Injectable({
  providedIn: 'root'
})
export class FinancialStatsService {
  getIncomeData(): Observable<Income[]> {
    // Logic to get income data
    // You can make an API call or return mock data
    const incomeData: Income[] = [
      { category: 'Sales', description: 'Product sales', amount: 1000, date: new Date(), period: 'Month' },
      { category: 'Sales', description: 'Product sales', amount: 1000, date: new Date(), period: 'Month' },
      { category: 'Subsidies', description: 'Subsidies', amount: 1000, date: new Date(), period: 'Month' },
      { category: 'Subsidies', description: 'Subsidies', amount: 1000, date: new Date(), period: 'Month' },
      { category: 'Other Income', description: 'Other Income', amount: 1000, date: new Date(), period: 'Month' },
      // Add more income data here
    ];
    return of(incomeData);
  }

  getExpenseData(): Observable<Expense[]> {
    // Logic to get expense data
    // You can make an API call or return mock data
    const expenseData: Expense[] = [
      { category: 'Supplies', description: 'Purchase of supplies', amount: 500, date: new Date(), period: 'Month' },
      { category: 'Labor', description: 'Labor payment', amount: 500, date: new Date(), period: 'Month' },
      { category: 'Labor', description: 'Labor payment', amount: 500, date: new Date(), period: 'Month' },
      { category: 'Maintenance', description: 'Maintenance payment', amount: 500, date: new Date(), period: 'Month' },
      { category: 'Other Expenses', description: 'Other Expenses', amount: 500, date: new Date(), period: 'Month' },
      // Add more expense data here
    ];
    return of(expenseData);
  }

  getProfitabilityData(): Observable<Profitability[]> {
    // Logic to get profitability data
    // You can make an API call or return mock data
    const profitabilityData: Profitability[] = [
      { product: 'Product A', margin: 0.2 },
      // Add more profitability data here
    ];
    return of(profitabilityData);
  }
  getFilteredIncomeData(category: string, period: string): Observable<Income[]> {
    return this.getIncomeData().pipe(
      map((incomeData: Income[]) => {
        if (category === 'all' && period === 'all') {
          return incomeData;
        } else {
          return incomeData.filter((income: Income) =>
            (category === 'all' || income.category === category) &&
            (period === 'all' || income.period === period)
          );
        }
      })
    );
  }

  getFilteredExpenseData(category: string, period: string): Observable<Expense[]> {
    return this.getExpenseData().pipe(
      map((expenseData: Expense[]) => {
        if (category === 'all' && period === 'all') {
          return expenseData;
        } else {
          return expenseData.filter((expense: Expense) =>
            (category === 'all' || expense.category === category) &&
            (period === 'all' || expense.period === period)
          );
        }
      })
    );
  }
}
