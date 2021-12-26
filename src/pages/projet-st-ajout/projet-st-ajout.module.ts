import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjetStAjoutPage } from './projet-st-ajout';

@NgModule({
  declarations: [
    ProjetStAjoutPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjetStAjoutPage),
  ],
})
export class ProjetStAjoutPageModule {}
