import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjetAppartAjoutPage } from './projet-appart-ajout';

@NgModule({
  declarations: [
    ProjetAppartAjoutPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjetAppartAjoutPage),
  ],
})
export class ProjetAppartAjoutPageModule {}
