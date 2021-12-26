import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { ProjetPage } from '../pages/projet/projet';
import { ClientPage } from '../pages/client/client';
import { FournisseurPage } from '../pages/fournisseur/fournisseur';
import { SousTraitantPage } from '../pages/sous-traitant/sous-traitant';
import { DeconnexionPage } from '../pages/deconnexion/deconnexion';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;


 rootPage:any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage   },
      { title: 'Projets', component: ProjetPage },
      { title: 'Clients', component: ClientPage },
      { title: 'Fournisseurs', component: FournisseurPage },
      { title: 'Sous traitants', component: SousTraitantPage },
      { title: 'Déconnexion', component: DeconnexionPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
