import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  users?: User[];

  //public User : User= new User;

  constructor(private userService : UserService){}
  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers():void{
    this.userService.getUser().subscribe(
      (Response =>{
        this.users = Response as User[];
        console.log(this.users);
      }),
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
      );
  }
  // public getUserByID(UserID:number):void{
  //   this.userService.getUserById(UserID).subscribe(
  //     (Response.User)=>{
  //       this.user = Response;
  //     }
  //   )
  // }




}
