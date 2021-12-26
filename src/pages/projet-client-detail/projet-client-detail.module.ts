import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjetClientDetailPage } from './projet-client-detail';

@NgModule({
  declarations: [
    ProjetClientDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjetClientDetailPage),
  ],
})
export class ProjetClientDetailPageModule {}
