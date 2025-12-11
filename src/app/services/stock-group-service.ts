import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StockGroupService {
  private http = inject(HttpClient);

  getOneStock(id: string): Observable<StockGroup> {
    return this.http.get<StockGroup>('/api/' + id);
  }

  getAllStocks(): Observable<StockGroup[]> {
    return this.http.get<StockGroup[]>('/api/employees');
  }

  createNewStock(newStock: StockGroup): Observable<StockGroup> {
    return this.http.post<StockGroup>('/api/create-employee', newStock);
  }

  deleteStock(stockId: string): Observable<StockGroup>{
    return this.http.delete<StockGroup>('/api/delete/' + stockId);
  }
}