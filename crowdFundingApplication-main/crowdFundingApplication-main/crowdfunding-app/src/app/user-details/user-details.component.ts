import { Component, OnInit } from '@angular/core';
import { Contribution } from '../models/contribution';
import { Campaign } from '../models/campaign';
import { UserDataService } from '../services/user-data.service';
import { User } from '../models/user';
import { CampaignService } from '../services/campaign.service';
import { TotalAmount } from '../models/total-amount';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userId : number =0;
  contributions: Contribution[] = [];
  Campaigns: Campaign[] = [];
  totalAmount: number = 0;
  campaignId:  number = 0;
  totalContribution: number=0;

  constructor(private userDataService:UserDataService, private campaignService: CampaignService){}
  ngOnInit(): void {
    const storedValue: string = localStorage.getItem('currentUser') || '';
    const retrievedObject: User = JSON.parse(storedValue || '{}');
    this.userId = retrievedObject.id;

    this.userDataService.getUserContributions(this.userId).subscribe(
      (contributions: Contribution[])=>{
        this.contributions = contributions;
        this.calculateTotalAmount();
      },
      (error)=>{
        console.error('Error fetching user contributions:', error);
      }
    );
    this.userDataService.getUserCampaigns(this.userId).subscribe(
      (Campaign:Campaign[])=>{
        this.Campaigns = Campaign;
      },
      (error)=>{
        console.error('Error fetching user campaings', error);
      }
    )
    //this.fetchCampaignTotalContribution();
    //this.getAmount();

  }
  calculateTotalAmount(): void {
    this.totalAmount = this.contributions.reduce((total, contribution) => total + contribution.amount, 0);
  }
  deleteCampaign(campaignId: number): void{
    this.campaignService.deleteCampaign(campaignId).subscribe(
      ()=>{
        console.log('Campaign with Id ${campaignId} deletedsucessfully.');
      },
      (error)=>{
        console.error('Error deleting campaign',error);
      }
    )
  }
  getAmount():void{
    this.campaignService.getTotalAmount(3).subscribe(
      (response)=>{
        this.totalContribution= response.Amount;
        //alert(this.totalContribution);
      },
      (error)=>{
        console.error('Error',error);
      }
    )
  }
  // fetchCampaignTotalContribution(): void{
  //   this.campaignService.getCampaignTotalContribution(this.campaignId).subscribe(
  //     (total:number)=>{
  //       this.totalContribution = total;
  //     },
  //     (error)=>{
  //       console.error('Error fetching campaign totalcontribution:', error);
  //     }
  //   );
  // }
 }
