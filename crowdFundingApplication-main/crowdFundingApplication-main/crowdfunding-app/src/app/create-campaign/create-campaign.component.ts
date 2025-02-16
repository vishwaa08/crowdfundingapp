import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../services/campaign.service';
import { User } from '../models/user';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
export class Data{
    title:string="";
    description:any;
    fundingGoal:number=0;
    endDate:any= new Date();
    category:string="";
    creator: User = new User;
    imageUrl:string="";
}
@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit{
  // formData: any= {
  //   title: '',
  //   description: '',
  //   fundingGoal:0,
  //   endDate: new Date(),
  //   category: '',
  //   creator:User
  // };

  data:Data = new Data();
  constructor(private campaingnService: CampaignService, private user: User, private router: Router){}
  ngOnInit(): void {
    const storedValue: string = localStorage.getItem('currentUser') || '';
    const retrievedObject: User = JSON.parse(storedValue || '{}');
    this.data.creator = retrievedObject;
    console.log(retrievedObject)
  //   this.authService.getCurrentUser().subscribe(user => {
  //     this.formData.creator = user;
  //   });
  // }
  }

  createCampagine():void{
    this.router.navigate(['/campaigns']);
    this.campaingnService.createCampaign(this.data).subscribe(
      (newCampaign)=>{
        alert("Form Created");
        
      },
      (error) =>{
        console.log('Error Creating Campaing',Error);
      }
    );
    
  }
}
