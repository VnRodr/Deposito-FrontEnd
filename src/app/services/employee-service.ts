import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private http = inject(HttpClient);

  getOneEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>('/api/' + id);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('/api/employees');
  }

  createNewEmployee(newEmployee: Employee): Observable<Employee> {
    return this.http.post<Employee>('/api/create-employee', newEmployee);
  }

  deleteEmployee(employeeId: string): Observable<Employee>{
    return this.http.delete<Employee>('/api/delete/' + employeeId);
  }
}