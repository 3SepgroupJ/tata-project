import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './component/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProfileDetailsComponent } from './home/profile-details/profile-details.component';
import { NewUserComponent } from './home/profile-details/new-user/new-user.component';
import { ExistingUserComponent } from './home/profile-details/existing-user/existing-user.component';
import { TrackMyApplicationComponent } from './home/profile-details/track-my-application/track-my-application.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { OnlyNumberDirective } from './directive/only-number.directive';
import { DialogBoxComponent } from './home/profile-details/dialog-box/dialog-box.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ExistingUserProfileDetailsComponent } from './existing-user-profile-details/existing-user-profile-details.component';
import {MatTableModule} from '@angular/material/table';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';


const MaterialModules = [
  MatProgressSpinnerModule,
  MatStepperModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSliderModule,
  MatSelectModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatTableModule
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProfileDetailsComponent,
    NewUserComponent,
    ExistingUserComponent,
    TrackMyApplicationComponent,
    OnlyNumberDirective,
    DialogBoxComponent,
    ExistingUserProfileDetailsComponent,
    LoginComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...MaterialModules
  ],
  exports:[...MaterialModules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
