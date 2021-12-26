import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { fournisseur } from '../../models/fournisseur.model';
import { FournisseurProvider } from '../../providers/fournisseur/fournisseur';

/**
 * Generated class for the FournisseurAjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fournisseur-ajout',
  templateUrl: 'fournisseur-ajout.html',
})
export class FournisseurAjoutPage {
  aj_fournisseur:fournisseur;
  data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fournisseurPr:FournisseurProvider,
    public alertCtrl:AlertController) {

    this.aj_fournisseur ={
      "NUM_FOURNISSEUR": null,
      "NOM": null,
      "PRENOM": null,
      "DATE_NAISS": null,
      "ADRESSE": null,
      "EMAIL": null,
      "TEL_FOURNISSEUR": null
    }
  }

  async validerPayement(fournisseur$) {
     this.fournisseurPr.add_fournisseur(fournisseur$)
      .subscribe(res => {
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
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'kkkk',
      subTitle: 'fournisseur ajouté avec succès !',
      cssClass: 'nomclient',
      buttons: ['ok']
    });
    alert.present();
  }

}
