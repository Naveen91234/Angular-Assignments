import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router) {}
  canActivate(): boolean {
    let canPaSS = true;
    if (canPaSS) {
      return true; // Allow access if the user is authenticated
    } else {
      this.router.navigate(['/']); // Redirect to login if not authenticated
      return false; // Prevent access to the route
    }
  }
}