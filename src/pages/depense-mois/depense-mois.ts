import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DepenseMoisProvider } from '../../providers/depense-mois/depense-mois';

/**
 * Generated class for the DepenseMoisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-depense-mois',
  templateUrl: 'depense-mois.html',
})
export class DepenseMoisPage {
  NUM_PROJET: object;
  NOM_DU_PROJET: object;
  data: any;
  depense = [];
  d: any;
  showme = false;
  year: any;
  month: any;
  type: any;
  type2: any;
  searchMode = false;
  searchTerm: string=""
  query:string="";
  TOTAL:any;
  GROUP_SEPARATOR=" ";
  yearpaye=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public depensePr: DepenseMoisProvider) {
    this.NOM_DU_PROJET = this.navParams.get('data');
    this.NUM_PROJET = this.navParams.get('data1');
  }
  ionViewWillEnter() {
    this.yearPayement() ;

  }

  DepenseMois($year, $month, $type, $type2,$query) {
    this.depensePr.get_depense_mois(this.NUM_PROJET, $year, $month, $type, $type2, $query)
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.depense = this.data.return;
          this.TOTAL=this.data['TOTAL'];

        });
  };
  yearPayement() {
    this.depensePr.get_date(this.NUM_PROJET)
      .subscribe(
        res => {
          this.data = res;
          console.log('date',this.data);
          this.yearpaye = this.data.return;
         

        });
  };

  show(year, month, type ,query) {
    
    this.year = year;
    this.month = month;
    this.query = query;

if(this.month!=null && this.year!=null && type!=null)
    this.showme = true;
    if (type =='general') {
      this.type = "fournisseur";
      this.type2="soustraitant"
    }else{
      this.type = type;
      this.type2 = type;
    }
      this.DepenseMois(this.year, this.month, this.type, this.type2,this.query)
    }


    
    search(search) {
      
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
