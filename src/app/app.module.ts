import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProjetPage } from '../pages/projet/projet';
import { ClientPage } from '../pages/client/client';
import { FournisseurPage } from '../pages/fournisseur/fournisseur';
import { SousTraitantPage } from '../pages/sous-traitant/sous-traitant';
import { DeconnexionPage } from '../pages/deconnexion/deconnexion';
import { TabsPage } from '../pages/tabs/tabs';
import { ClientAjoutPage } from '../pages/client-ajout/client-ajout';
import { ClientModifierPage } from '../pages/client-modifier/client-modifier';
import { ClientFichePage } from '../pages/client-fiche/client-fiche';
import { ClientProvider } from '../providers/client/client';
import { HttpClientModule } from '@angular/common/http';
import { ProjetDetailPage } from '../pages/projet-detail/projet-detail';
import { ProjetClientPage } from '../pages/projet-client/projet-client';
import { ProjetClientDetailPage } from '../pages/projet-client-detail/projet-client-detail';
import { ProjetClientAjoutPage } from '../pages/projet-client-ajout/projet-client-ajout';
import { ProjetProvider } from '../providers/projet/projet';
import { ProjetAjoutPage } from '../pages/projet-ajout/projet-ajout';
import { ProjetEditPage } from '../pages/projet-edit/projet-edit';
import { ProjetAppartementPage } from '../pages/projet-appartement/projet-appartement';
import { AppartementProvider } from '../providers/appartement/appartement';
import { ProjetAppartAjoutPage } from '../pages/projet-appart-ajout/projet-appart-ajout';
import { ProjerAppartVentePage } from '../pages/projer-appart-vente/projer-appart-vente';
import { IonicSelectableModule } from 'ionic-selectable';
import { ClientVenteAppartPage } from '../pages/client-vente-appart/client-vente-appart';
import { VersementClientAppartPage } from '../pages/versement-client-appart/versement-client-appart';
import { HistoriquePaiementPage } from '../pages/historique-paiement/historique-paiement';
import { ProjetFournisseurPage } from '../pages/projet-fournisseur/projet-fournisseur';
import { FournisseurProvider } from '../providers/fournisseur/fournisseur';
import { FournisseurFichePage } from '../pages/fournisseur-fiche/fournisseur-fiche';
import { FournisseurEditPage } from '../pages/fournisseur-edit/fournisseur-edit';
import { FournisseurAjoutPage } from '../pages/fournisseur-ajout/fournisseur-ajout';
import { SousTraitantProvider } from '../providers/sous-traitant/sous-traitant';
import { SousTraitAjoutPage } from '../pages/sous-trait-ajout/sous-trait-ajout';
import { SousTraitFichePage } from '../pages/sous-trait-fiche/sous-trait-fiche';
import { SousTraitEditPage } from '../pages/sous-trait-edit/sous-trait-edit';
import { ProjetFournisseurProvider } from '../providers/projet-fournisseur/projet-fournisseur';
import { ProjetFournisseurAjoutPage } from '../pages/projet-fournisseur-ajout/projet-fournisseur-ajout';
import { ProjetFournisseurAchatPage } from '../pages/projet-fournisseur-achat/projet-fournisseur-achat';
import { ProjetFournisseurPayementPage } from '../pages/projet-fournisseur-payement/projet-fournisseur-payement';
import { ProjetSousTraitantPage } from '../pages/projet-sous-traitant/projet-sous-traitant';
import { SousTraitantProjetProvider } from '../providers/sous-traitant-projet/sous-traitant-projet';
import { ProjetStAjoutPage } from '../pages/projet-st-ajout/projet-st-ajout';
import { ProjetStAjoutPayementPage } from '../pages/projet-st-ajout-payement/projet-st-ajout-payement';
import { ProjetStDetailPage } from '../pages/projet-st-detail/projet-st-detail';
import { ProjetStDetailPayementPage } from '../pages/projet-st-detail-payement/projet-st-detail-payement';
import { TotalBalancePage } from '../pages/total-balance/total-balance';
import { BalanceProvider } from '../providers/balance/balance';
import { DepenseMoisPage } from '../pages/depense-mois/depense-mois';
import { DepenseMoisProvider } from '../providers/depense-mois/depense-mois';

@NgModule({
  declarations: [
    DepenseMoisPage,
    MyApp,
    HomePage,
    ProjetAppartementPage,
    ProjetAppartAjoutPage,
    ProjerAppartVentePage,
    ProjetPage,
    ProjetAjoutPage,
    ProjetDetailPage,
    ProjetEditPage,
    ProjetClientPage,
    ProjetClientAjoutPage,
    ProjetClientDetailPage,
    ProjetFournisseurPage,
    ProjetFournisseurAjoutPage,
    ProjetFournisseurAchatPage,
    ProjetFournisseurPayementPage,
    ProjetSousTraitantPage,
    ProjetStAjoutPage,
    ProjetStAjoutPayementPage,
    ProjetStDetailPage,
    ProjetStDetailPayementPage,
    ClientPage,
    ClientAjoutPage,
    ClientModifierPage,
    ClientFichePage,
    ClientVenteAppartPage,
    FournisseurPage,
    FournisseurAjoutPage,
    FournisseurFichePage,
    FournisseurEditPage,
    HistoriquePaiementPage,
    SousTraitantPage,
    SousTraitAjoutPage,
    SousTraitEditPage,
    SousTraitFichePage,
    TabsPage,
    TotalBalancePage,
    VersementClientAppartPage,
    DeconnexionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement:'bottom'}),
    IonicSelectableModule,
    HttpClientModule
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DepenseMoisPage,
    MyApp,
    HomePage,
    ProjetAppartementPage,
    ProjetAppartAjoutPage,
    ProjerAppartVentePage,
    ProjetPage,
    FournisseurAjoutPage,
    ProjetAjoutPage,
    ProjetDetailPage,
    ProjetEditPage,
    ProjetClientPage,
    ProjetClientAjoutPage,
    ProjetClientDetailPage,
    ProjetFournisseurPage,
    ProjetFournisseurAjoutPage,
    ProjetFournisseurAchatPage,
    ProjetFournisseurPayementPage,
    ProjetSousTraitantPage,
    ProjetStAjoutPage,
    ProjetStAjoutPayementPage,
    ProjetStDetailPage,
    ProjetStDetailPayementPage,
    ClientPage,
    ClientAjoutPage,
    ClientModifierPage,
    ClientFichePage,
    ClientVenteAppartPage,
    FournisseurPage,
    FournisseurFichePage,
    FournisseurEditPage,
    HistoriquePaiementPage,
    SousTraitantPage,
    SousTraitAjoutPage,
    SousTraitEditPage,
    SousTraitFichePage,
    VersementClientAppartPage,
    TabsPage,
    TotalBalancePage,
    DeconnexionPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ClientProvider,
    ProjetProvider,
    AppartementProvider,
    FournisseurProvider,
    SousTraitantProvider,
    ProjetFournisseurProvider,
    SousTraitantProjetProvider,
    BalanceProvider,
    DepenseMoisProvider
  ]
})
export class AppModule { }
