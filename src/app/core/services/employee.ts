import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Constant } from '../constants/constant';
import { EmployeeModel } from '../models/class/employee.model';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/interface/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private http: HttpClient) { }

  getAllEmloyeeList(): Observable<ApiResponse> {
    //debugger
    return this.http.get<ApiResponse>(environment.API_URL + Constant.API_METHODS.EMPLOYEE.GET_ALL_EMPLOYEE);
  }

  createNewEmloyee(empObj: EmployeeModel): Observable<ApiResponse> {
    //debugger
    return this.http.post<ApiResponse>(environment.API_URL + Constant.API_METHODS.EMPLOYEE.CREATE_EMPLOYEE, empObj);
  }
  getEmplyeeById(empId: number): Observable<ApiResponse> {
    //debugger
    //return this.http.get<ApiResponse>(environment.API_URL + Constant.API_METHODS.EMPLOYEE.GET_EMPLOYEE_BY_ID + empId);
    //template literal
    return this.http.get<ApiResponse>(`${environment.API_URL}${Constant.API_METHODS.EMPLOYEE.GET_EMPLOYEE_BY_ID}${empId} `);

  }

    updateEmplyeeById(empObj: EmployeeModel): Observable<ApiResponse> {
    //debugger
    //return this.http.get<ApiResponse>(environment.API_URL + Constant.API_METHODS.EMPLOYEE.GET_EMPLOYEE_BY_ID + empId);
    //template literal
    return this.http.put<ApiResponse>(`${environment.API_URL}${Constant.API_METHODS.EMPLOYEE.UPDATE_EMPLOYEE_BY_ID} `,empObj);

  }
}
