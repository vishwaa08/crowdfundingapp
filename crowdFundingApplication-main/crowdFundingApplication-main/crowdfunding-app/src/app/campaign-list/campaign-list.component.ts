// import { Component, NgModule, OnInit } from '@angular/core';
// import { Campaign } from '../models/campaign';
// import { CampaignService } from '../services/campaign.service';
// import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';
// import { User } from '../models/user';
// import { ContributionService } from '../services/contribution.service';
// import { Contribution } from '../models/contribution';
// import { NgModel } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
// @Component({
//   selector: 'app-campaign-list',
//   standalone: true,
//   imports: [NgFor,
//     CurrencyPipe,
//     FormsModule,
//     CommonModule
//   ],
//   templateUrl: './campaign-list.component.html',
//   styleUrls: ['./campaign-list.component.scss']
// })
// export class CampaignListComponent implements OnInit{

//   campaigns : Campaign[] =[];
//   selectedCampaign: Campaign = new Campaign;
//   contributionAmount: number = 0;
//   retrievedObject: any;
//   campagin: any;
  
//   constructor(private campaginService: CampaignService, private contributionService: ContributionService){}
//   ngOnInit(): void {
//     this.loadCampagins();
//     const storedValue: string = localStorage.getItem('currentUser') || '';
//     const retrievedObject: User = JSON.parse(storedValue || '{}');
//     console.log(retrievedObject.id);
//   }

//   loadCampagins():void{
//     this.campaginService.getCampaigns().subscribe(
//       (campaign: Campaign[]) => {
//         this.campaigns = campaign;
//       },
//       (error) =>{
//         console.error('Error fetching campaigns:', error);
//       }
//     )
// }
//   openContributionForm(campaign: Campaign){
//     this.selectedCampaign = campaign;
//     this.contributionAmount = 0;
//   }
//   submitContribution():void{
//     const backerId = this.retrievedObject.id;
//     const contribution: Contribution = {
//       amount: this.contributionAmount,
//       backer_id: backerId,
//       campaign_id: this.selectedCampaign.id,
      
//     };
//     this.contributionService.createContribution(contribution).subscribe(
//       response =>{
//         console.log('Contribution successful:', response);
//       },
//       error =>{
//         console.error('Error making contribution:', error);
//       }
//     );
//   }
// }
// import { Component, NgModule, OnInit } from '@angular/core';
// import { Campaign } from '../models/campaign';
// import { CampaignService } from '../services/campaign.service';
// import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';
// import { User } from '../models/user';
// import { ContributionService } from '../services/contribution.service';
// import { Contribution } from '../models/contribution';
// import { NgModel } from '@angular/forms';
// import { FormsModule } from '@angular/forms';

// export class Data{
//     amount: number=0;
//     backer: User = new User;
//     campaign: Campaign = new Campaign;
// }

// @Component({
//   selector: 'app-campaign-list',
//   standalone: true,
//   imports: [NgFor,
//     CurrencyPipe,
//     FormsModule,
//     CommonModule
//   ],
//   templateUrl: './campaign-list.component.html',
//   styleUrls: ['./campaign-list.component.scss']
// })
// export class CampaignListComponent implements OnInit{

//   campaigns : Campaign[] =[];
//   selectedCampaign: Campaign = new Campaign;
//   contributionAmount: number = 0;
//   retrievedObject: any;
//   campagin: any;
  
//   data:Data = new Data();

//   constructor(private campaginService: CampaignService, private contributionService: ContributionService){}
//   ngOnInit(): void {
//     this.loadCampagins();
//     const storedValue: string = localStorage.getItem('currentUser') || '';
//     const retrievedObject: User = JSON.parse(storedValue || '{}');
//     console.log(retrievedObject);
//     this.data.backer = retrievedObject;
//   }

//   loadCampagins():void{
//     this.campaginService.getCampaigns().subscribe(
//       (campaign: Campaign[]) => {
//         this.campaigns = campaign;
//       },
//       (error) =>{
//         console.error('Error fetching campaigns:', error);
//       }
//     )
// }
//   openContributionForm(campaign: Campaign){
//     this.selectedCampaign = campaign;
//     this.contributionAmount = 0;
//     this.data.campaign = campaign;
    
//     console.log(this.selectedCampaign);
//   }
//   submitContribution():void{
//     const backerId = this.retrievedObject;
//     // const contribution: Contribution = {
//     //   amount: this.contributionAmount,
//     //   backer_id: backerId,
//     //   campaign_id: this.selectedCampaign,

//     // };
//     this.contributionService.createContribution(this.data).subscribe(
//       response =>{
//         console.log('Contribution successful:', response);
//       },
//       error =>{
//         console.error('Error making contribution:', error);
//       }
//     );
//   }
// }







import { Component, NgModule, OnInit } from '@angular/core';
import { Campaign } from '../models/campaign';
import { CampaignService } from '../services/campaign.service';
import { CommonModule, CurrencyPipe, NgFor } from '@angular/common';
import { User } from '../models/user';
import { ContributionService } from '../services/contribution.service';
import { Contribution } from '../models/contribution';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

export class Data{
    amount: number=0;
    backer: User = new User;
    campaign: Campaign = new Campaign;
}

@Component({
  selector: 'app-campaign-list',
  standalone: true,
  imports: [NgFor,
    CurrencyPipe,
    FormsModule,
    CommonModule
  ],
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent implements OnInit {
  campaigns: Campaign[] = [];
  selectedCampaign: Campaign = new Campaign();
  contributionAmount: number = 0;
  retrievedObject: any;
  campagin: any;
  data: Data = new Data();
  showContributionForm = false;
  showThankYouMessage = false;
  

  constructor(private campaignService: CampaignService, private contributionService: ContributionService) {}

  ngOnInit(): void {
    this.loadCampaigns();
    const storedValue: string = localStorage.getItem('currentUser') || '';
    const retrievedObject: User = JSON.parse(storedValue || '{}');
    console.log(retrievedObject);
    this.data.backer = retrievedObject;
  }

  loadCampaigns(): void {
    this.campaignService.getCampaigns().subscribe(
      (campaign: Campaign[]) => {
        this.campaigns = campaign;
      },
      (error) => {
        console.error('Error fetching campaigns:', error);
      }
    );
  }

  openContributionForm(campaign: Campaign): void {
    this.selectedCampaign = campaign;
    this.showContributionForm = true; // Show the contribution form
    this.data.campaign = campaign;
    console.log(this.selectedCampaign);
  }
  closeContributionForm() {
    this.showContributionForm = false;
    //this.data.amount = 0;
  }

  submitContribution(): void {
    const backerId = this.retrievedObject;
   //alert("Thanks For Contributing");
    // const contribution: Contribution = {
    //   amount: this.contributionAmount,
    //   backer_id: backerId,
    //   campaign_id: this.selectedCampaign,
    // };
    this.closeContributionForm();
    this.showThankYouMessage = true;
    this.contributionService.createContribution(this.data).subscribe(
      (response) => {
        console.log('Contribution successful:', response);
        this.showContributionForm = false; // Hide the form after submission
      },
      (error) => {
        console.error('Error making contribution:', error);
      }
    );
  }
  closeThankYouMessage() {
    this.showThankYouMessage = false;
  }
  
}