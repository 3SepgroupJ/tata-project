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
  MatDatepickerModule
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    ...MaterialModules
  ],
  exports:[...MaterialModules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
