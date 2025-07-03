import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { EmployeeModel } from '../models/class/employee.model';
import { Constant } from '../constants/constant';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/interface/apiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  http = inject(HttpClient);

  constructor() { }

  GetAllRolesList():Observable<ApiResponse> {
    //debugger
    return this.http.get<ApiResponse>(environment.API_URL + Constant.API_METHODS.MASTER.GET_ALL_ROLES)
  }

  GetAllDesignationList():Observable<ApiResponse> {
    //debugger
    return this.http.get<ApiResponse>(environment.API_URL + Constant.API_METHODS.MASTER.GET_ALL_DESIGNATIONS)
  }
}
