import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjetAjoutPage } from './projet-ajout';

@NgModule({
  declarations: [
    ProjetAjoutPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjetAjoutPage),
  ],
})
export class ProjetAjoutPageModule {}
