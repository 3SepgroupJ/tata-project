import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewUserService } from 'src/app/shared/new-user/new-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  Login: boolean=false;

  loginform!:FormGroup;
  constructor(private fb:FormBuilder, private newuserservice:NewUserService) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      'loginid':[''],
      'password':['']
    })
  }

  loggedInUser(){
   console.log(this.loginform.value);
  }

  getUserDetails(){
    this.newuserservice.getDetailsFromServer('LoggedInMembers').subscribe((data:any)=>{

    })
  }


}
