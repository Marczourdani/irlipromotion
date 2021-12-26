import { Component } from '@angular/core';
import { AlertController, IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { ClientProvider } from '../../providers/client/client';
import { ClientAjoutPage } from '../client-ajout/client-ajout';
import { ClientFichePage } from '../client-fiche/client-fiche';
import { ClientModifierPage } from '../client-modifier/client-modifier';

/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})
export class ClientPage {

  client =[];
  NUM_client:object;
  data:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private modal:  ModalController,
    private alertCtrl:AlertController,
    private clientPr:ClientProvider) {

      this.NUM_client = this.navParams.data;
  }

  // ngOnInit() {this.chargerDataApi();}
  ionViewWillEnter(){this.chargerDataApi();}

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.chargerDataApi();
      refresher.complete();
    }, 2000);
  }

  chargerDataApi() {
    this.clientPr.getClients()
      .subscribe(
        res => {
          this.data = res;
          //ionic serve
          console.log(this.data);
          this.client = this.data.return
          //  for (let i = 0 ; i < this.data.return.length; i++) {
          // this.client.push(this.data.return[i]);
          // }

        });
  };

  ajoutClient() {
    // const modal = this.modal.create(ClientAjoutPage);
    // modal.present();
    this.navCtrl.push(ClientAjoutPage);
  }
  modifierClient($NUM_CLIENT) {
    //const modal = this.modal.create(ClientModifierPage, {data:$NUM_CLIENT});
   // modal.present();
   this.navCtrl.push(ClientModifierPage, {data:$NUM_CLIENT});
  }



  detailClient(){
    const modal = this.modal.create(ClientFichePage);
    modal.present();
    modal.onDidDismiss(data => {
      console.log(data);
    });
  }



  
  suprimerDataApi($NUM_CLIENT) {
    let alert = this.alertCtrl.create({
      title: 'qsdqs',
      message: 'Voulez vous supprimer ce client?',
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

            this.clientPr.del_client_par_num($NUM_CLIENT)
            .subscribe(
              res => {
                this.data = res;
               // this.navCtrl.push(ClientPage);
                let alert = this.alertCtrl.create({
                  title: "Information",
                  message:"Client supprimé",
                  subTitle: this.data['msg'],
                  buttons: ['OK']
                });
                alert.present();
                this.chargerDataApi();
              });
          }
        }
      ]
    });
    alert.present();
  }
}



