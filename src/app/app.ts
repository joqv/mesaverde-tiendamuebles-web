import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { authCodeFlowConfig } from '../auth.config';
import { OAuthService } from 'angular-oauth2-oidc';
import { NgIf } from '@angular/common'; 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

    protected readonly title = signal('mesaverde-tiendamuebles-web');

    userName?: string;

    constructor(
      private oauthService: OAuthService, 
      private router: Router){
    this.configureOAuth();
  }

   private async configureOAuth() {
    this.oauthService.setStorage(localStorage);
    this.oauthService.configure(authCodeFlowConfig);
    await this.oauthService.loadDiscoveryDocumentAndTryLogin();
      console.log('DEBUG storage access_token:', localStorage.getItem('access_token'));
    this.oauthService.setupAutomaticSilentRefresh();

    if (this.oauthService.hasValidAccessToken()) {
      const claims = this.oauthService.getIdentityClaims() as any;
      this.userName = claims?.name || claims?.preferred_username || claims?.sub;
        console.log('🧍 Usuario autenticado:', this.userName);
    }
  }

  login() { this.oauthService.initLoginFlow(); }
  //logout() { this.oauthService.logOut(); }
  logout() { 
    localStorage.clear();
    window.location.href="/bvcatalogo"
   }
  goToTasks() { this.router.navigate(['/bvcatalogo']); }

}
