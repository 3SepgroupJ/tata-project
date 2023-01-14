import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewUserService } from '../shared/new-user/new-user.service';

@Component({
  selector: 'app-existing-user-profile-details',
  templateUrl: './existing-user-profile-details.component.html',
  styleUrls: ['./existing-user-profile-details.component.scss']
})
export class ExistingUserProfileDetailsComponent implements OnInit {
  userDetails: any;
  errorMessage: any;

  constructor(private existinguserService:NewUserService, private router:Router) { }

  ngOnInit(): void {
    this.getUserDetailsfromServer();
  }
 
  getUserDetailsfromServer(){
    this.existinguserService.getDetailsFromServer("New-User").subscribe((data: any) => {
      if (data && data.length > 0) {
        this.userDetails = data;
        console.log(this.userDetails);
          
        }
    }

    );
  }

  editCoustmerDetails(id:number){
    this.router.navigate(['edit-new-user',id]);
  }

  deleteCoustmerDetailsfromServer(id:number,index:number){
    let isConfirm = confirm("are you sure ??")
    if(isConfirm){
      let path= "New-User/"+id;
      this.existinguserService.deleteDatafromServer(path).subscribe((resp)=>{
        this.userDetails.splice(index,1)
        console.log(resp);
      },
      error=>{
        this.errorMessage=error;
      }
      ) 
    }
   
  }
  }
