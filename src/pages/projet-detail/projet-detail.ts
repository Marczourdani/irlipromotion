import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DepenseMoisPage } from '../depense-mois/depense-mois';
import { ProjetAppartementPage } from '../projet-appartement/projet-appartement';
import { ProjetClientPage } from '../projet-client/projet-client';
import { ProjetFournisseurPage } from '../projet-fournisseur/projet-fournisseur';
import { ProjetSousTraitantPage } from '../projet-sous-traitant/projet-sous-traitant';
import { TotalBalancePage } from '../total-balance/total-balance';

/**
 * Generated class for the ProjetDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet-detail',
  templateUrl: 'projet-detail.html',
})
export class ProjetDetailPage {


  NUM: object;
  NOM_DU_PROJET: object

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.NUM = this.navParams.get('data1');
    this.NOM_DU_PROJET = this.navParams.get('data');
  }

  // afficher la liste des clients dans un projet
  goToClients($NOM_DU_PROJET, $NUM) {
    this.navCtrl.push(ProjetClientPage, { data: $NOM_DU_PROJET, data1: $NUM })
  }
  //les appartements d'un projet
  goToAppartement($NOM_DU_PROJET, $NUM) {
    this.navCtrl.push(ProjetAppartementPage, { data: $NOM_DU_PROJET, data1: $NUM });
  } 
  
  //les appartements d'un projet
  goToFournisseur($NOM_DU_PROJET, $NUM) {

    this.navCtrl.push(ProjetFournisseurPage, { data: $NOM_DU_PROJET, data1: $NUM });
  }  
  
  goToSousTraitants($NOM_DU_PROJET, $NUM) {

    this.navCtrl.push(ProjetSousTraitantPage, { data: $NOM_DU_PROJET, data1: $NUM });
  }
  goToTotalBalance($NOM_DU_PROJET, $NUM){
    this.navCtrl.push(TotalBalancePage, { data: $NOM_DU_PROJET, data1: $NUM });
  } 
  
  goToDepenseMois($NOM_DU_PROJET, $NUM){
    this.navCtrl.push(DepenseMoisPage, { data: $NOM_DU_PROJET, data1: $NUM });
  }
}
