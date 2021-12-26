import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { projet } from '../../models/client/projet.model';
import { ProjetProvider } from '../../providers/projet/projet';

/**
 * Generated class for the ProjetAjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet-ajout',
  templateUrl: 'projet-ajout.html',
})
export class ProjetAjoutPage {

  aj_projet: projet;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public projetPr: ProjetProvider) {


    this.aj_projet = {
      "NUM": null,
      "NOM_DU_PROJET": null,
      "DATE_DEBUT_PROJET": null,
      "DATE_FIN_PROJET": null,
      "DELAI_REALISATION": null,
      "ADRESSE": null,
      "NOMBRE_BLOC": null
  }
}
 
  
  async validerProjet(projet$) {
  this.projetPr.ajout_projet(projet$)
    .subscribe(res => {
      console.log(this.aj_projet);
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
