import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
      // Agrega más datos de ingresos aquí
    ];
    return of(incomeData);
  }

  getExpenseData(): Observable<Expense[]> {
    // Lógica para obtener los datos de gastos
    // Puedes hacer una llamada a una API o devolver datos mock
    const expenseData: Expense[] = [
      { categoria: 'Suministros', descripcion: 'Compra de suministros', monto: 500, fecha: new Date(), periodo: 'Mes' },
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
}
