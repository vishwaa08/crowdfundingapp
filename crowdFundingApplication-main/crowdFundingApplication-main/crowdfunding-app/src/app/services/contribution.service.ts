import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contribution } from '../models/contribution';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContributionService {

  private apiUrl = 'http://localhost:8080/api/contributions';
  constructor(private http : HttpClient) { }

  getContributions():Observable<Contribution[]>{
    return this.http.get<Contribution[]>(this.apiUrl);
  }
  createContribution(contribution:any):Observable<Contribution>{
    return this.http.post<Contribution>(this.apiUrl,contribution);
  }
}
