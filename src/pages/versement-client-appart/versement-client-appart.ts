import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { versement } from '../../models/versement.model';
import { AppartementProvider } from '../../providers/appartement/appartement';

/**
 * Generated class for the VersementClientAppartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-versement-client-appart',
  templateUrl: 'versement-client-appart.html',
})
export class VersementClientAppartPage {
  aj_versement: versement;
  data: any;
  ID_TRANS: object;
  type: any;
  montant: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    public appartPr: AppartementProvider) {
    this.ID_TRANS = this.navParams.get('id_trans');
    this.aj_versement = {
      "ID_PAYE_CLIENT": null,
      "NUM_COMPTE": null,
      "ID_TRANS": this.ID_TRANS,
      "OBSERVATION": null,
      "DATE_P": null,
      "DEBIT": null,
      "CREDIT": null,
      "MONTANT_REMBOURSE": null,
      "MONTANT_PAYE": null
    }



  }


  ajouterPayement($pm) {
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

              this.aj_versement.DEBIT = this.montant;
              this.aj_versement.CREDIT = 0;

             } else
               if (this.type == "cr") {

                 this.aj_versement.CREDIT = this.montant;
                 this.aj_versement.DEBIT = 0;

               }
            this.appartPr.ajouter_payement($pm)
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
