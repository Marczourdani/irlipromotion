import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { payeST } from '../../models/paye-sous-traitant.model';
import { SousTraitantProjetProvider } from '../../providers/sous-traitant-projet/sous-traitant-projet';

/**
 * Generated class for the ProjetStAjoutPayementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet-st-ajout-payement',
  templateUrl: 'projet-st-ajout-payement.html',
})
export class ProjetStAjoutPayementPage {
  aj_paye_st:payeST;
  type: any;
  montant: number;
  data:any;
  NUM_COMPTE:object;
  ID:object
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl:AlertController,public stPr:SousTraitantProjetProvider) {

this.ID=this.navParams.get('id');
      this.aj_paye_st={
        "NUM_COMPTE":null,
        "ID_PST":this.ID,
        "OBSERVATION":null,
        "DATE_P":null,
        "DEBIT":null,
        "CREDIT":null  
      }
  }

  ionViewWillEnter() {
   
  }
  async validerST(ST$) {
    

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

              this.aj_paye_st.DEBIT = this.montant;
              this.aj_paye_st.CREDIT = 0;

            } else
              if (this.type == "cr") {

                this.aj_paye_st.CREDIT = this.montant;
                this.aj_paye_st.DEBIT = 0;

              }
            this.stPr.add_payement_st(ST$)
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
