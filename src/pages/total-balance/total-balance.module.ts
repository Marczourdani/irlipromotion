import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TotalBalancePage } from './total-balance';

@NgModule({
  declarations: [
    TotalBalancePage,
  ],
  imports: [
    IonicPageModule.forChild(TotalBalancePage),
  ],
})
export class TotalBalancePageModule {}
