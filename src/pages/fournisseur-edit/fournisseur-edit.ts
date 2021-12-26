import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { fournisseur } from '../../models/fournisseur.model';
import { FournisseurProvider } from '../../providers/fournisseur/fournisseur';

/**
 * Generated class for the FournisseurEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fournisseur-edit',
  templateUrl: 'fournisseur-edit.html',
})
export class FournisseurEditPage {
  aj_fournisseur: fournisseur;
  fournisseur = [];
  data: any;
  NUM_FOURNISSEUR: object;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fournisseurPr: FournisseurProvider,
    public alertCtrl:AlertController) {

    this.NUM_FOURNISSEUR = this.navParams.get('num_f');
    this.aj_fournisseur = {
      "NUM_FOURNISSEUR": null,
      "NOM": null,
      "PRENOM": null,
      "DATE_NAISS": new Date().toISOString(),
      "ADRESSE": null,
      "EMAIL": null,
      "TEL_FOURNISSEUR": null
    }
  }

  ionViewWillEnter() {
    this.getFournisseurByNum();
  }
  async getFournisseurByNum() {
    this.fournisseurPr.get_fournisseur_by_num(this.NUM_FOURNISSEUR)
      .subscribe(
        res => {
          this.data = res;
          this.aj_fournisseur = {
            "NUM_FOURNISSEUR": this.NUM_FOURNISSEUR,
            "NOM": this.data.return[0].NOM,
            "PRENOM": this.data.return[0].PRENOM,
            "DATE_NAISS": this.data.return[0].DATE_NAISS,
            "ADRESSE": this.data.return[0].ADRESSE,
            "EMAIL": this.data.return[0].EMAIL,
            "TEL_FOURNISSEUR": this.data.return[0].TEL_FOURNISSEUR

          }

        });
  }

  validerFournisseur($fr) {
    this.fournisseurPr.update_fournisseur($fr)
      .subscribe(res => {

        this.data = res;
       
    
        let alert = this.alertCtrl.create({
          title: "Information",
          subTitle: res['msg'],
          buttons: ['OK']
        });
       
        alert.present();
     this.navCtrl.pop();
      }, (err) => {
        console.log(err);

      });

  }

}
