import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjetFournisseurProvider } from '../../providers/projet-fournisseur/projet-fournisseur';

/**
 * Generated class for the ProjetFournisseurAchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet-fournisseur-achat',
  templateUrl: 'projet-fournisseur-achat.html',
})
export class ProjetFournisseurAchatPage {
  NUM_PROJET:object;
  NUM_FOURNISSEUR:object;
  data:any;
  achat=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fournisseurPr:ProjetFournisseurProvider) {
      this.NUM_PROJET=this.navParams.get('num_pr');
      this.NUM_FOURNISSEUR=this.navParams.get('num_fr');
  }

  ionViewWillEnter() {
    this.chargerDataApi();
  }

  chargerDataApi() {
    this.fournisseurPr.get_all_achat_fournisseur(this.NUM_PROJET,this.NUM_FOURNISSEUR)
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.achat = this.data.return

        });
  };


}
