import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FournisseurProvider } from '../../providers/fournisseur/fournisseur';

/**
 * Generated class for the FournisseurFichePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fournisseur-fiche',
  templateUrl: 'fournisseur-fiche.html',
})
export class FournisseurFichePage {
  NUM_FOURNISSEUR: object;
  data: any;
  aj_fournisseur: object;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fournisseurPr: FournisseurProvider,
    public viewCtrl: ViewController) {

    this.NUM_FOURNISSEUR = this.navParams.get('num_f');

   this.aj_fournisseur ={
      "NUM_FOURNISSEUR": null,
      "NOM": null,
      "PRENOM": null,
      "DATE_NAISS": new Date().toISOString(),
      "ADRESSE": null,
      "EMAIL": null,
      "TEL_FOURNISSEUR": null
    }
  }

ionViewWillEnter(){
  this.getFournisseurByNum();
}
  async getFournisseurByNum() {
    this.fournisseurPr.get_fournisseur_by_num(this.NUM_FOURNISSEUR)
      .subscribe(
        res => {
          this.data = res;
          this.aj_fournisseur ={
            "NUM_FOURNISSEUR": this.NUM_FOURNISSEUR,
            "NOM":this.data.return[0].NOM,
            "PRENOM": this.data.return[0].PRENOM,
            "DATE_NAISS": this.data.return[0].DATE_NAISS,
            "ADRESSE":  this.data.return[0].ADRESSE,
            "EMAIL": this.data.return[0].EMAIL,
            "TEL_FOURNISSEUR": this.data.return[0].TEL_FOURNISSEUR
          
        }

        });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
