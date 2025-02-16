import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { CampaignService } from './services/campaign.service';
import { ContributionService } from './services/contribution.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { LoginComponent } from './login/login.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { RegistrationComponent } from './registration/registration.component';
import { User } from './models/user';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateCampaignComponent,
    RegistrationComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    CampaignService,
    ContributionService,
    UserProfileComponent,
    CampaignListComponent,
    User
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
