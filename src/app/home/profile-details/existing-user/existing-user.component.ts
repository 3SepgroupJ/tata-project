import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Data, Route, Router } from '@angular/router';
import { NewUserService } from 'src/app/shared/new-user/new-user.service';

@Component({
  selector: 'app-existing-user',
  templateUrl: './existing-user.component.html',
  styleUrls: ['./existing-user.component.scss']
})
export class ExistingUserComponent implements OnInit {
  loginform!:FormGroup
  errorMessage: any;
  userDetails:existingUser[]=[]
  constructor(private fb:FormBuilder, private existinguserService:NewUserService, private router:Router, private route:ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      'firstName':[''],
      'mobileNo':[''],
      'pan':['']
    })
// this.logginSuccess();
  }


  submitLoginForm(){
     this.loginform.value
     this.loginUser();
    //  this. getUserDetailsfromServer();
    }

    // getUserDetailsfromServer(){
    //   this.existinguserService.getDetailsFromServer("New-User").subscribe((data: any) => {
    //     if (data && data.length > 0) {
    //       this.userDetails = data;
    //       if(this.userDetails == this.loginform.value) 
    //       this.router.navigate(['existing-user-profile-details']);   
    //       }
    //   } 
    //   )
    // } 

    loginUser(){
      this.http.get<any>('http://localhost:3000/New-User')
      .subscribe((res:any)=>{
        const user = res.find((a:any)=>{
          a.firstName == this.loginform.value.firstName
        })
        if(user){
          this.router.navigate(['existing-user-profile-details']);
        }
      });
      
    }
}

export class existingUser{
  firstName!:string;
  mobileNo!:number;
  pan!:string;
}