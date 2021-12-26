import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjetClientPage } from './projet-client';

@NgModule({
  declarations: [
    ProjetClientPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjetClientPage),
  ],
})
export class ProjetClientPageModule {}
