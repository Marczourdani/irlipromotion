import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjetDetailPage } from './projet-detail';

@NgModule({
  declarations: [
    ProjetDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjetDetailPage),
  ],
})
export class ProjetDetailPageModule {}
