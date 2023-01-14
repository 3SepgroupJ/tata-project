import { Component, OnInit } from '@angular/core';
import { NewUserService } from '../shared/new-user/new-user.service';

@Component({
  selector: 'app-existing-user-profile-details',
  templateUrl: './existing-user-profile-details.component.html',
  styleUrls: ['./existing-user-profile-details.component.scss']
})
export class ExistingUserProfileDetailsComponent implements OnInit {
  userDetails: any;

  constructor(private existinguserService:NewUserService) { }

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
}