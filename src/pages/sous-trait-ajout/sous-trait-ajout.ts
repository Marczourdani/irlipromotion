import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { soustraitant } from '../../models/sous-traitant.model';
import { SousTraitantProvider } from '../../providers/sous-traitant/sous-traitant';

/**
 * Generated class for the SousTraitAjoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sous-trait-ajout',
  templateUrl: 'sous-trait-ajout.html',
})
export class SousTraitAjoutPage {
  aj_st:soustraitant;
  data:any;
  tache=[];
  formGroup:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public soustraitPr:SousTraitantProvider,
    public alertCtrl:AlertController,
    public formBuilder: FormBuilder
    ) {

     this.aj_st ={
      "NUM":null,             
      "NOM":null,          
      "PRENOM":null,          
      "DATE_NAISS":null,
      "EMAIL":null,            
      "TEL":null,         
      "TACHE_PRINCIPAL":null,
     
      "ADRESSE":null
      }
  }


  ionViewWillEnter(){
    // this.formGroup=this.formBuilder.group({
    //   NOM:['',Validators.required],
    // })
    this.getAllTaches();
  }


  
  async getAllTaches() {
    this.soustraitPr.get_all_taches()
      .subscribe(
        res => {
          this.data = res;
          this.tache = this.data.return;
          console.log("tache", this.tache);

        });
  }

  async validerSousTraitant(st$) {
    this.soustraitPr.add_sous_traitant(st$)
     .subscribe(res => {
       let alert = this.alertCtrl.create({
         title: "Information",
         subTitle: res['msg'],
         buttons: ['OK']
       });
       alert.present();
       this.navCtrl.pop();
     }, (err) => {
       console.log(err);
     });

 }
 presentAlert() {
   let alert = this.alertCtrl.create({
     title: 'kkkk',
     subTitle: 'Sous Traitant ajouté avec succès !',
     cssClass: 'nomclient',
     buttons: ['ok']
   });
   alert.present();
 }

}
