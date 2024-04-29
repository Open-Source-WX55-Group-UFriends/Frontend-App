export interface Income {
  categoria: string;
  descripcion: string;
  monto: number;
  fecha: Date;
  periodo: string;
}

export interface Expense {
  categoria: string;
  descripcion: string;
  monto: number;
  fecha: Date;
  periodo: string;
}

export interface Profitability {
  producto: string;
  margen: number;
}
