import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../core/models/class/employee.model';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../../core/services/employee';
import { ApiResponse } from '../../../core/models/interface/apiResponse.model';
import { MasterService } from '../../../core/services/master';
import { IDesignation, IRoles } from '../../../core/models/interface/master.model';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule,AsyncPipe,NgIf],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeForm implements OnInit, OnDestroy {
  employeeObj: EmployeeModel = new EmployeeModel();
  roleList: IRoles[] = [];
  designationList$: Observable<any> = new Observable<any>();

  subscriptionArray: Subscription[] = [];

  employeeService = inject(EmployeeService);
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.getAllRoles();
    this.designationList$ = this.masterService.GetAllDesignationList();
  }

  getAllRoles() {
    const Roll = this.masterService.GetAllRolesList().subscribe({
      next: (res: ApiResponse) => {
        this.roleList = res.data

      },
      error: () => {

      }
    })

    this.subscriptionArray.push(Roll);
  }

  onSave() {
    debugger;
    this.subscriptionArray.push(this.employeeService.createNewEmloyee(this.employeeObj).subscribe({
      next: (result: ApiResponse) => {
        if (result.result) {
          alert("employee created successfully")
        } else {
          alert(result.message)
        }
      },
      error: (err) => {
        alert("API error")
      }
    })
    )
  }

  ngOnDestroy(): void {
    this.subscriptionArray.forEach(item => {
      item.unsubscribe();
    })
  }

}
