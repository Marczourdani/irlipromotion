import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { appartement } from '../../models/appartement.model';
import { AppartementProvider } from '../../providers/appartement/appartement';

/**
 * Generated class for the ProjetAppartAjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet-appart-ajout',
  templateUrl: 'projet-appart-ajout.html',
})
export class ProjetAppartAjoutPage {
NUM:object;
NOM_DU_PROJET :object;
aj_appart: appartement;
etat= 0;
nbr;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl:AlertController,
    public appartPr:AppartementProvider) {

    this.NOM_DU_PROJET = this.navParams.get('data');
    this.NUM = this.navParams.get('data1');
    this.aj_appart={
      "NUM_BIEN":null,
      "NUM_PROJET": this.NUM,
      "CODE_BLOC":null,
      "CODE_BIEN":null,
      "ETAGE":null,
      "TAILLE":null,
      "ETAT":"0",
      "SUPERFICE":null,
      "PRIX_TOT_1":null,
      "PRIX_TOT_2":null,
      "nbr":null,
    }
  }

  // ionViewWillEnter() {
  //   this.validerAppart(this.aj_appart);
   
  // }

   
  async validerAppart(projet$) {
   
    this.appartPr.insert_appart(projet$)
      .subscribe(res => {
        console.log(this.aj_appart);
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
