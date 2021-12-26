import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { soustraitant } from '../../models/sous-traitant.model';
import { SousTraitantProvider } from '../../providers/sous-traitant/sous-traitant';

/**
 * Generated class for the SousTraitFichePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sous-trait-fiche',
  templateUrl: 'sous-trait-fiche.html',
})
export class SousTraitFichePage {
  NUM_ST:object;
  data:any;
  sousTrait=[];
  aj_sous_trait:soustraitant;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public sousTraitantPr: SousTraitantProvider,
    public viewCtrl:ViewController) {
    this.NUM_ST= this.navParams.get('num_s');
    this.aj_sous_trait ={
      "NUM": null,
      "NOM": null,
      "PRENOM": null,
      "DATE_NAISS": new Date().toISOString(),
      "ADRESSE": null,
      "EMAIL": null,
      "TEL": null,
      "TACHE_PRINCIPAL": null,

    }
  }

  ionViewWillEnter(){
    this.getSousTraitantByNum();
  }
    async getSousTraitantByNum() {
      this.sousTraitantPr.get_sous_traitant_by_num(this.NUM_ST)
        .subscribe(
          res => {
            this.data = res;
            this.aj_sous_trait ={
              "NUM": this.NUM_ST,
              "NOM": this.data.return[0].NOM,
              "PRENOM": this.data.return[0].PRENOM,
              "DATE_NAISS": this.data.return[0].DATE_NAISS,
              "ADRESSE": this.data.return[0].ADRESSE,
              "EMAIL": this.data.return[0].EMAIL,
              "TEL": this.data.return[0].TEL,
              "TACHE_PRINCIPAL": this.data.return[0].TACHE_PRINCIPAL,
             
            }
  
          });
    }
  
    dismiss() {
      this.viewCtrl.dismiss();
    }

}
