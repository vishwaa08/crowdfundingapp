import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  formData: any={
    username: '',
    email: '',
    password:''
  };
  errorMessage: string ='';

  constructor(private userService: UserService, private router: Router){}

  registerUser():void{
    this.userService.addUser(this.formData).subscribe(
      (response)=> {
        console.log('User registered successfully:', response);
        alert("Thanks for registering");
        this.router.navigate(['/login']);
      },
     
      (error)=>{
        console.log('Error registering user',error);
        this.errorMessage = 'Registration failed. Please try again.';
      }
      
    );
    console.log(this.formData)
  }
}
