import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewUserService } from 'src/app/shared/new-user/new-user.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

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
  otp:number=1234
  customerForm!:FormGroup;
  constructor(private dialog:MatDialog, private fb:FormBuilder, private newuserservice:NewUserService) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      'id':[''],
      'employeeType':[''],
      'mobileNo':['',[Validators.maxLength(10),Validators.minLength(10)]],
      'pan':[''],
      'firstName':[''],
      'lastName':[''],
      'dob':[''],
      'gender':[''],
      'pincode':[''],
      'city':['']
    })
  }

  submitForm(){
     this.sendDetailstoServer();
    }

  sendDetailstoServer(){
    let data = this.customerForm.value ;
    this.newuserservice.postDetailsToServer('New-User',data).subscribe((data:any)=>{
      console.log(data);
    },
    error=>{
      console.log(error);
    })
  }


  sendOtp(){
    if(this.customerObj.mobileNo){
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '500px',
      data: {name: this.customerObj.mobileNo
        ,otp:this.otp, EnterOtp:""},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });

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
  value: any;
}
