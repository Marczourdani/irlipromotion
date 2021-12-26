import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SousTraitantProjetProvider } from '../../providers/sous-traitant-projet/sous-traitant-projet';

/**
 * Generated class for the ProjetStDetailPayementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projet-st-detail-payement',
  templateUrl: 'projet-st-detail-payement.html',
})
export class ProjetStDetailPayementPage {
  ID:object;
  data:any;
  payement=[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public st_Pr:SousTraitantProjetProvider) {
      this.ID =this.navParams.get('id');
  }

  ionViewWillEnter() {
    this.chargerDataApi();
  }

  chargerDataApi() {
    this.st_Pr.get_detail_payement(this.ID)
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.payement = this.data.return

        });
  };

}
