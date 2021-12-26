import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { fournisseur } from '../../models/projet-fournisseur.model';
import { FournisseurProvider } from '../../providers/fournisseur/fournisseur';
import { ProjetFournisseurProvider } from '../../providers/projet-fournisseur/projet-fournisseur';

/**
 * Generated class for the ProjetFournisseurAjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet-fournisseur-ajout',
  templateUrl: 'projet-fournisseur-ajout.html',
})
export class ProjetFournisseurAjoutPage {
NUM_PROJET:object;
NUM_FOURNISSEUR:object;
add_fournisseur:fournisseur;
data:any;
fournisseur=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fournisseurPr:ProjetFournisseurProvider ,
    public fournisseur_Pr:FournisseurProvider,
    public alertCtrl:AlertController) {
    this.NUM_PROJET =  this.navParams.get('num_pr');
    this.NUM_FOURNISSEUR = this.navParams.get('num_fr');

    this.add_fournisseur={
      "ID":null,
      "NUM_PROJET":this.NUM_PROJET,
      "NUM_FOURNISSEUR":this.NUM_FOURNISSEUR,
      "MONTANT":null,
      "OBSERVATION":null,
      "DATE_PF":null
    }
  }

  ionViewWillEnter() {
    this.chargerDataApi();
  }

  chargerDataApi() {
    this.fournisseur_Pr.get_all_fournisseurs()
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.fournisseur = this.data.return

        });
  };

  async validerFournisseur(fournisseur$) {
    this.fournisseurPr.add_fournisseur_pr(fournisseur$)
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
