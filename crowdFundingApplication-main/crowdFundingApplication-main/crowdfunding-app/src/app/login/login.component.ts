// import { Component } from '@angular/core';
// import { AuthService } from '../AuthService/services.service';
// import { Route, Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

//   username:string="";
//   password: string="";
//   error:string=""

//   constructor(private http: HttpClient, private router: Router){}

//   private url= 'http://localhost:8080/login';
//   login():void{
//     const credentials = {username: this.username, password: this.password};
//     this.http.post<any>(this.url,credentials).subscribe(
//       response =>{
//         console.log('Login successful');
//         this.router.navigate(['/home']);
//       },
//       error =>{
//         this.error ='Invalid username or password';
//         console.error('Login failed:', error);
//       }
//     );
//   }
// }
// import { Component } from '@angular/core';
// import { AuthService } from '../auth-service.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   username: string = '';
//   password: string = '';
//   error: string = '';

//   constructor(private authService: AuthService, private router: Router) { }

//   login(): void {
//     this.authService.login(this.username, this.password).subscribe(
//       response => {
//         console.log(JSON.stringify('Login successful'));
//         this.router.navigate(['/profile']);
//       },
//       error => {
//         this.error = 'Invalid username or password';
//         console.error('Login failed:', error);
//       }
//     );
//   }
// }
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string | undefined;
  password: string | undefined;
  error: string | undefined;

  constructor(private http: HttpClient, private router: Router, private userService:UserService) { }

  login(): void {
    const credentials = { username: this.username, password: this.password };
    this.http.post<any>('http://localhost:8080/api/login/log', credentials)
      .subscribe(
        response => {
          // Login successful, redirect to home page or desired route
          console.log('Login successful', response.message);
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          //this.userService.setCurrentUser(response.user);
          alert("login sucessfull");
          this.router.navigate(['/campaigns']); // Navigate to home page after successful login
        },
        (error: HttpErrorResponse) => {
          // Login failed, display error message based on response
          if (error.error instanceof ErrorEvent) {
            // Client-side error
            this.error = 'An error occurred:' + error.error.message;
          } else {
            // Backend returned an unsuccessful response code
            this.error = 'Invalid username or password';
          }
          console.error('Login failed:', error);
        }
      );
  }
  logout(){
    this.router.navigate(['/login/log']);
  }

}
