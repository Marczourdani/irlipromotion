import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientPage } from '../client/client';
import { FournisseurPage } from '../fournisseur/fournisseur';
import { HomePage } from '../home/home';
import { ProjetPage } from '../projet/projet';
import { SousTraitantPage } from '../sous-traitant/sous-traitant';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  projet = ProjetPage;
  client= ClientPage;
  fournisseur = FournisseurPage;
  soustraitant = SousTraitantPage;


}
