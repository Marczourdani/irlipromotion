import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { payeFournisseur } from '../../models/paye-fournisseur.model';
import { ProjetFournisseurProvider } from '../../providers/projet-fournisseur/projet-fournisseur';

/**
 * Generated class for the ProjetFournisseurPayementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet-fournisseur-payement',
  templateUrl: 'projet-fournisseur-payement.html',
})
export class ProjetFournisseurPayementPage {
  aj_payement_fr: payeFournisseur;
  type: any;
  montant: number;
  ID_FOURNISSEUR: object;
  ID_PROJECT: object;
  data: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fournisseurPr: ProjetFournisseurProvider,
    public alertCtrl: AlertController) {
    this.ID_FOURNISSEUR = this.navParams.get('num_fr');
    this.ID_PROJECT = this.navParams.get('num_pr');
    this.aj_payement_fr = {
      "ID_PAYE_FOURNISSEUR": null,
      "NUM_COMPTE": null,
      "ID_FOURNISSEUR": this.ID_FOURNISSEUR,
      "ID_PROJECT": this.ID_PROJECT,
      "OBSERVATION": null,
      "DATE_P": null,
      "DEBIT": null,
      "CREDIT": null
    }
  }

  async validerFournisseur(fournisseur$) {
    //     this.fournisseurPr.add_payement_fournisseur(fournisseur$)
    //      .subscribe(res => {
    //        let alert = this.alertCtrl.create({
    //          title: "Information",
    //          subTitle: res['msg'],
    //          buttons: ['OK']
    //        });
    //        alert.present();
    //        this.navCtrl.pop();
    //      }, (err) => {
    //        console.log(err);
    //      });

    //  }
    //  presentAlert() {
    //    let alert = this.alertCtrl.create({
    //      title: 'kkkk',
    //      subTitle: 'fournisseur ajouté avec succès !',
    //      cssClass: 'nomclient',
    //      buttons: ['ok']
    //    });
    //    alert.present();
    //  }


    let alert = this.alertCtrl.create({
      title: 'qsdqs',
      message: 'Voulez vous effetuer ce payement?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confimer',
          handler: () => {
            if (this.type == "db") {

              this.aj_payement_fr.DEBIT = this.montant;
              this.aj_payement_fr.CREDIT = 0;

            } else
              if (this.type == "cr") {

                this.aj_payement_fr.CREDIT = this.montant;
                this.aj_payement_fr.DEBIT = 0;

              }
            this.fournisseurPr.add_payement_fournisseur(fournisseur$)
              .subscribe(
                res => {
                  this.data = res;



                  let alert = this.alertCtrl.create({
                    title: "Information",

                    subTitle: this.data['msg'],
                    buttons: ['OK']
                  });
                  alert.present();
                  this.navCtrl.pop();

                });

          }
        }
      ]
    });
    alert.present();

  }
}
