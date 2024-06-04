export class FinancialData {
}

export interface Income {
  category: string;
  description: string;
  amount: number;
  date: Date;
  period: string;
}

export interface Expense {
  category: string;
  description: string;
  amount: number;
  date: Date;
  period: string;
}

export interface Profitability {
  product: string;
  margin: number;
}
