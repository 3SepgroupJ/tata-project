import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  customerObj:Customer=new Customer();
  employeeType:any=[
    {value:"salaried" ,viewValue:"Salaried"},
    {value:"selfEmployeed", viewValue:"Self-Employeed"},
    {value:"others",viewValue:"Others"}
  ]

  gender:any=[
    {value:"male",viewValue:"Male"},
    {value:"female",viewValue:"Female"}
  ]
  constructor() { }

  ngOnInit(): void {
  }


}

export class Customer{
  employeeType!:string;
  mobileNo!:number;
  pan!:string;
  firstName!:string;
  lastName!:string;
  dob!:number;
  gender!:string;
  pincode!:number;
  city!:string;
}
