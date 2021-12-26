import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BalanceProvider } from '../../providers/balance/balance';

/**
 * Generated class for the TotalBalancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-total-balance',
  templateUrl: 'total-balance.html',
})
export class TotalBalancePage {
  NOM_DU_PROJET: object;
  NUM_PROJET: object;
  data:any;
  balance=[];
  dette=[];
  entree=[];
  GROUP_SEPARATOR=" ";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public balancePr:BalanceProvider) {
    this.NOM_DU_PROJET = this.navParams.get('data');
    this.NUM_PROJET = this.navParams.get('data1');
  }
  ionViewWillEnter()
  {
   this.totalBalance();
   this.detailDette();
   this.detailEntree();
    
   }
  totalBalance() {
    this.balancePr.get_total_balance(this.NUM_PROJET)
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.balance = this.data.return

        });
  };

  detailDette() {
    this.balancePr.get_detail_dette(this.NUM_PROJET)
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.dette = this.data.return

        });
  };
  detailEntree() {
    this.balancePr.get_detail_entree(this.NUM_PROJET)
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.entree = this.data.return

        });
  };

  format(valString) {
    if (!valString) {
        return '';
    }
    let val = valString.toString();
    const parts = val.replace(/ /g, '');
    return parts.replace(/\B(?=(?:\w{3})+(?!\w))/g, this.GROUP_SEPARATOR) 
};

}
