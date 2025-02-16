// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from './AuthService/services.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuardService  implements CanActivate{

//   constructor(private authServices : AuthService, private router:Router) { }
//   canActivate(): boolean {
//     if(this.authServices.isLoggedIn()){
//       return true;
//     } else{
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }
