import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Campaign } from '../models/campaign'; // Import Campaign model
import { Contribution } from '../models/contribution';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { TotalAmount } from '../models/total-amount';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private apiUrl = 'http://localhost:8080/api/campaigns';

  constructor(private http: HttpClient) { }

  //totalContribution:number=0;
  getCampaigns(): Observable<Campaign[]> {
    const url = this.apiUrl+'/all';
    return this.http.get<Campaign[]>(url);
  }

  getCampaignById(campaignId: number): Observable<Campaign> {
    return this.http.get<Campaign>(`${this.apiUrl}/${campaignId}`);
  }

  createCampaign(campaignData: any): Observable<Campaign> {
    return this.http.post<Campaign>(this.apiUrl, campaignData);
  }

  updateCampaign(campaignId: number, campaignData: any): Observable<Campaign> {
    return this.http.put<Campaign>(`${this.apiUrl}/${campaignId}`, campaignData);
  }
  deleteCampaign(campaignId: number): Observable<void> {
    const url  = `${this.apiUrl}/${campaignId}`;
    return this.http.delete<void>(url);
  }
  getCampaignContributions(campaignId:number): Observable<Contribution[]>{
    const url = `${this.apiUrl}/${campaignId}/totalContribution`;
    return this.http.get<Contribution[]>(url);
  }

  getCampaignTotalContribution(CampaignId: number): Observable<number> {
    return this.getCampaignContributions(CampaignId).pipe(
      map((response: any) => {
        if (Array.isArray(response.contributions)) {
          return response.contributions.reduce((total: number, contribution: Contribution) => total + contribution.amount, 0);
        } else {
          return 0;
        }
      })
    );
  }
  getTotalAmount(campaignId:number){
    const url = `${this.apiUrl}/${campaignId}/amount`;
    return this.http.get<TotalAmount>(url);
  }
    // Implement other campaign-related methods (deleteCampaign, getContributionsForCampaign, etc.)
}
// return contributions.reduce((total, contribution)=>total + contribution.amount, 0);