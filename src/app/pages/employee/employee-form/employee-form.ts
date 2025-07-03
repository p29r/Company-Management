import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../core/models/class/employee.model';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../../core/services/employee';
import { ApiResponse } from '../../../core/models/interface/apiResponse.model';
import { MasterService } from '../../../core/services/master';
import { IDesignation, IRoles } from '../../../core/models/interface/master.model';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, AsyncPipe, NgIf],
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
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  currentEmplyeeId: number = 0;

  ngOnInit(): void {
    this.getAllRoles();
    this.designationList$ = this.masterService.GetAllDesignationList(); //async pipe
    this.activatedRoute.params.subscribe({
      next: (data: any) => {
        debugger;
        this.currentEmplyeeId = data.id;
        if (this.currentEmplyeeId !== 0) {
          this.getCurentEmployeeById(this.currentEmplyeeId);
        }
      },
    })
  }

  getCurentEmployeeById(empId: number) {
    this.employeeService.getEmplyeeById(empId).subscribe({
      next: (res: ApiResponse) => {
        this.employeeObj = res.data
      },
      error: () => { }
    })
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
          alert("employee created successfully");
          this.router.navigateByUrl('employee-list');
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

  onUpdate() {
    debugger;
    this.subscriptionArray.push(this.employeeService.updateEmplyeeById(this.employeeObj).subscribe({
      next: (result: ApiResponse) => {
        if (result.result) {
          alert("employee Updated successfully")
          this.router.navigateByUrl('employee-list');
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
