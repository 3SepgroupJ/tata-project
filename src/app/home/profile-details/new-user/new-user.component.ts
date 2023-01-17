import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IDeactivateInterface } from 'src/app/guards/can-deactivate.guard';
import { NewUserService } from 'src/app/shared/new-user/new-user.service';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit, IDeactivateInterface{
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
  selectCoustmerId!: number;
  editAction!: boolean;
  constructor(private dialog:MatDialog, private fb:FormBuilder, private newuserservice:NewUserService, private route:ActivatedRoute,private router:Router) { }
  

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
    const id = this.route.snapshot.paramMap.get('id');
     if(id){
        this.selectCoustmerId = Number(id);
        this.editAction = true ;   
        this.getCoustmerDetailsById(this.selectCoustmerId);
     }
  }

  getCoustmerDetailsById(id:number){
    let path = "New-User/"+id;
    this.newuserservice.getDetailsFromServer(path).subscribe((data:any)=>{
     if(data){
      this.customerForm.patchValue(data);
     }
    })
  }

  submitForm(){
    if(this.editAction){
      this.updateCoustmerDetails(this.selectCoustmerId);
      this.router.navigate(['existing-user-profile-details']);
    }else{
      this.showConfirm();
      this.sendDetailstoServer();
    }
    }

    showConfirm(): boolean | Promise<boolean> | Observable<boolean> {
      if(!this.customerForm.dirty){
       var Isconfirm = confirm ("Please Fill the Details First");
       if(Isconfirm){
        return true;
       }else{
        return false;
       }
      }else{
        return true;
      }

    }

  sendDetailstoServer(){
    let data = this.customerForm.value ;
    this.newuserservice.postDetailsToServer('New-User',data).subscribe((data:any)=>{
      console.log(data);
      this.customerForm.reset();
    },
    error=>{
      console.log(error);
    })
  }

  updateCoustmerDetails(id:number){
    let path = "New-User/"+id;
    let data = this.customerForm.value;
    this.newuserservice.putDataToServer(path,data).subscribe((response)=>{
      console.log(response);
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
