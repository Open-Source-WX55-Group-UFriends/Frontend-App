import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Income, Expense, Profitability } from '../models/financial-data';

@Injectable({
  providedIn: 'root'
})
export class FinancialStatsService {
  getIncomeData(): Observable<Income[]> {
    // Lógica para obtener los datos de ingresos
    // Puedes hacer una llamada a una API o devolver datos mock
    const incomeData: Income[] = [
      { categoria: 'Ventas', descripcion: 'Venta de productos', monto: 1000, fecha: new Date(), periodo: 'Mes' },
      { categoria: 'Ventas', descripcion: 'Venta de productos', monto: 1000, fecha: new Date(), periodo: 'Mes' },
      { categoria: 'Subsidios', descripcion: 'Subsidios', monto: 1000, fecha: new Date(), periodo: 'Mes' },
      { categoria: 'Subsidios', descripcion: 'Subsidios', monto: 1000, fecha: new Date(), periodo: 'Mes' },
      { categoria: 'Otros Ingresos', descripcion: 'Otros Ingresos', monto: 1000, fecha: new Date(), periodo: 'Mes' },
      // Agrega más datos de ingresos aquí
    ];
    return of(incomeData);
  }

  getExpenseData(): Observable<Expense[]> {
    // Lógica para obtener los datos de gastos
    // Puedes hacer una llamada a una API o devolver datos mock
    const expenseData: Expense[] = [
      { categoria: 'Suministros', descripcion: 'Compra de suministros', monto: 500, fecha: new Date(), periodo: 'Mes' },
      { categoria: 'Mano de Obra', descripcion: 'Pago de mano de obra', monto: 500, fecha: new Date(), periodo: 'Mes' },
      { categoria: 'Mano de Obra', descripcion: 'Pago de mano de obra', monto: 500, fecha: new Date(), periodo: 'Mes' },
      { categoria: 'Mantenimiento', descripcion: 'Pago de mantenimiento', monto: 500, fecha: new Date(), periodo: 'Mes' },
      { categoria: 'Otros Gastos', descripcion: 'Otros Gastos', monto: 500, fecha: new Date(), periodo: 'Mes' },
      // Agrega más datos de gastos aquí
    ];
    return of(expenseData);
  }

  getProfitabilityData(): Observable<Profitability[]> {
    // Lógica para obtener los datos de rentabilidad
    // Puedes hacer una llamada a una API o devolver datos mock
    const profitabilityData: Profitability[] = [
      { producto: 'Producto A', margen: 0.2 },
      // Agrega más datos de rentabilidad aquí
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
            (category === 'all' || income.categoria === category) &&
            (period === 'all' || income.periodo === period)
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
            (category === 'all' || expense.categoria === category) &&
            (period === 'all' || expense.periodo === period)
          );
        }
      })
    );
  }
}
