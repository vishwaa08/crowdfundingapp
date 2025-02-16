
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import your components
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthService } from './AuthService/services.service';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserDataService } from './services/user-data.service';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'profile', component: UserProfileComponent },
  { path: 'campaigns' , component: CampaignListComponent},
  { path: 'campaigns/create', component: CreateCampaignComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'login' , component: LoginComponent},
  { path: '', redirectTo:'/login',pathMatch: 'full'},
  { path: 'uprofile', component: UserDetailsComponent}
  // Add more routes here for other components
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
