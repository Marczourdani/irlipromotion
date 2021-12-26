import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjetClientAjoutPage } from './projet-client-ajout';

@NgModule({
  declarations: [
    ProjetClientAjoutPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjetClientAjoutPage),
  ],
})
export class ProjetClientAjoutPageModule {}
