import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ExistingUserProfileDetailsComponent } from './existing-user-profile-details/existing-user-profile-details.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { ExistingUserComponent } from './home/profile-details/existing-user/existing-user.component';
import { NewUserComponent } from './home/profile-details/new-user/new-user.component';

const routes: Routes = [
  {path:'existing-user-profile-details', component:ExistingUserProfileDetailsComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'new-user',component:NewUserComponent,canDeactivate:[CanDeactivateGuard]},
  {path:'existing-user',component:ExistingUserComponent},
  {path:'edit-new-user/:id',component:NewUserComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
