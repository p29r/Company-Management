import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  imports: [ReactiveFormsModule],
  templateUrl: './client-list.html',
  styleUrl: './client-list.css'
})
export class ClientList {

  clientObj: FormGroup = new FormGroup({});

  initializeForm() {
    this.clientObj = new FormGroup({
      clientId: new FormControl(0),
      contactPersonName: new FormControl('',[Validators.required, Validators.minLength(2)]),
      companyName: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      pincode: new FormControl(''),
      state: new FormControl(''),
      employeeStrength: new FormControl(''),
      gstNo: new FormControl(''),
      contactNo: new FormControl(''),
      regNo: new FormControl(''),
    })


  }

}
