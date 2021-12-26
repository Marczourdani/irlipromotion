import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SousTraitantProjetProvider } from '../../providers/sous-traitant-projet/sous-traitant-projet';
import { ProjetStAjoutPayementPage } from '../projet-st-ajout-payement/projet-st-ajout-payement';
import { ProjetStAjoutPage } from '../projet-st-ajout/projet-st-ajout';
import { ProjetStDetailPage } from '../projet-st-detail/projet-st-detail';

/**
 * Generated class for the ProjetSousTraitantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet-sous-traitant',
  templateUrl: 'projet-sous-traitant.html',
})
export class ProjetSousTraitantPage {
  
  NUM_PROJET: object;
  NOM_DU_PROJET: object;
  data: any;
  sousTraitant = [];
  GROUP_SEPARATOR="";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public st_Pr: SousTraitantProjetProvider) {
    this.NOM_DU_PROJET = this.navParams.get('data');
    this.NUM_PROJET = this.navParams.get('data1');
  }

  ionViewWillEnter() {
    this.chargerDataApi();
  }

  chargerDataApi() {
    this.st_Pr.get_all_projet_sous_traitant(this.NUM_PROJET)
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.sousTraitant = this.data.return

        });
  };

  ajouterST($NUM_PROJET) {
    this.navCtrl.push(ProjetStAjoutPage, { num_p: $NUM_PROJET });
  }
  versementSt($NUM_PROJET,$ID){
    this.navCtrl.push(ProjetStAjoutPayementPage, { num_p: $NUM_PROJET,id:$ID });
    console.log('aVR',$ID)
  }
  detailSousTraitant($NUM_PROJET,$NUM_ST){
    this.navCtrl.push(ProjetStDetailPage, { num_p: $NUM_PROJET,num_st:$NUM_ST });
    console.log('aa',$NUM_ST)
  }

  format(valString) {
    if (!valString) {
        return '';
    }
    let val = valString.toString();
    const parts = val.replace(/ /g, '');
    return parts.replace(/\B(?=(?:\w{3})+(?!\w))/g, this.GROUP_SEPARATOR) 
};

}
