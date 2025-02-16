import { Component } from '@angular/core';
import { CampaignService } from '../services/campaign.service';

@Component({
  selector: 'app-contribution-form',
  standalone: true,
  imports: [],
  templateUrl: './contribution-form.component.html',
  styleUrls: ['./contribution-form.component.scss']
})
export class ContributionFormComponent {

}
export class CampaignListComponent {
  campaigns: any[]=[];
  showContributionForm: boolean = false;
  selectedCampaign: any;
  data: { amount: number } = { amount: 0 };

  openContributionForm(campaign: any) {
    this.selectedCampaign = campaign;
    this.showContributionForm = true;
  }

  closeContributionForm() {
    this.showContributionForm = false;
    this.selectedCampaign = null;
    this.data.amount = 0;
  }

  submitContribution() {
    // Handle the contribution submission logic here
    console.log('Contribution submitted:', this.data.amount);
    this.closeContributionForm();
  }
}
