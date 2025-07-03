import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../../core/services/employee';
import { IEmployeeLIst } from '../../../core/models/interface/employeeList.model';
import { Router, RouterLink } from '@angular/router';
import { ShortNamePipe } from '../../../shared/pipes/short-name-pipe';

@Component({
  selector: 'app-employee-list',
  imports: [RouterLink,ShortNamePipe],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit {
   router = inject(Router);

  employeeList: IEmployeeLIst[] = [];

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.empService.getAllEmloyeeList().subscribe({
      next: (result:any) => {
        debugger;
        this.employeeList = result.data;
      },
      error: () => { }
    })
  }

 

}
