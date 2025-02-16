import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contribution } from '../models/contribution';
import { Campaign } from '../models/campaign';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private baseUrl = 'http://localhost:8080/api/users';


  constructor(private http: HttpClient) { }

  getUserContributions(userId:number): Observable<Contribution[]>{
    return this.http.get<Contribution[]>(`${this.baseUrl}/${userId}/contributions`);
  }

  getUserCampaigns(userId: number): Observable<Campaign[]>{
    return this.http.get<Campaign[]>(`${this.baseUrl}/${userId}/campaigns`);
  }
}
