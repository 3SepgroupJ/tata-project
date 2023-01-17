import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUserService } from 'src/app/shared/new-user/new-user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm!:FormGroup;

  alert:boolean=false;
  constructor(private fb:FormBuilder, private newuserservice:NewUserService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      'fname':['',[Validators.required]],
      'lname':['',[Validators.required]],
      'loginid':['',[Validators.required]],
      'password':['',[Validators.required]]
    })
  }

  userSignUp(){  
    this.postDatatoServer();
    this.alert=true;
    this.signUpForm.reset();
  }


postDatatoServer(){
  let data = this.signUpForm.value;
  this.newuserservice.postDetailsToServer('LoggedInMembers',data).subscribe((data:any)=>{
    console.log(data);
    
  })
}

}