import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ExistingUserProfileDetailsComponent } from './existing-user-profile-details/existing-user-profile-details.component';
import { NewUserComponent } from './home/profile-details/new-user/new-user.component';

const routes: Routes = [
  {path:'existing-user-profile-details', component:ExistingUserProfileDetailsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'edit-new-user/:id',component:NewUserComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
