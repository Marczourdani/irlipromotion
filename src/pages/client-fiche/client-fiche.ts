import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams, ViewController } from 'ionic-angular';
import { client } from '../../models/client/client.model';
import { ClientProvider } from '../../providers/client/client';

/**
 * Generated class for the ClientFichePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client-fiche',
  templateUrl: 'client-fiche.html',
})
export class ClientFichePage {
  client = [];



  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private clientPr: ClientProvider,
    private viewCtrl: ViewController,
    private loadingCtrl: LoadingController) {

  }
  ionViewWillEnter() {
    let loading = this.loadingCtrl.create({
        content: 'Chargement de données..'
    });
    loading.present();
   


      loading.dismiss();
      setTimeout(() => {
          loading.dismiss();
      }, 3000);




        
}




 
  
}
