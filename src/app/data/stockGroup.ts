interface StockGroup {
    id: number;
    name: string;
    totalItems: number;
    value: number;
    lowStock: number;
    status: 'good' | 'warning';
    responsible: Employee
}