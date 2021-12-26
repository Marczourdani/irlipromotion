import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
};

@Injectable()
export class AppartementProvider {
  baseUrl = 'http://localhost/immobilier';
  constructor(public http: HttpClient) {
    console.log('Hello AppartementProvider Provider');
  }


  // Récupérer les appartements d'un projet
  get_projet_appartements($NUM) {
    const url = `${this.baseUrl}/appartement/getAllAppart.php`;
    return this.http.post(url, { "NUM": $NUM }, httpOptions).pipe();
  }

  // Récupérer les appartements d'un projet
  get_projet_appartement_bloc($NUM, $c_bloc) {
    const url = `${this.baseUrl}/appartement/getAllAppartByBloc.php`;
    return this.http.post(url, { "NUM": $NUM, "c_bloc": $c_bloc }, httpOptions).pipe();
  }

  get_projet_appartement_bloc_etat($NUM, $bloc, $value) {
    const url = `${this.baseUrl}/appartement/getAllAppartByBlocEtat.php`;
    return this.http.post(url, { "NUM": $NUM, "bloc": $bloc, "value": $value }, httpOptions).pipe();
  }


  //Ajouter  un  nouveau appartement
  insert_appart(data): Observable<any> {
    const url = `${this.baseUrl}/appartement/insertAppartt.php`;

    return this.http.post(url, data, httpOptions).pipe();
  }
  // Récupérer les noms des blocs
  get_projet_bloc($NUM) {
    const url = `${this.baseUrl}/appartement/getAllBloc.php`;
    console.log("Service", $NUM);
    return this.http.post(url, { "NUM": $NUM }, httpOptions).pipe();
  }

  //vendre appartement
  vendre_appart(data): Observable<any> {
    const url = `${this.baseUrl}/appartement/vendreAppart.php`;
    return this.http.post(url, data, httpOptions).pipe();
  }//vendre appartement client
  vendre_appart_client(data): Observable<any> {
    const url = `${this.baseUrl}/appartement/vendreAppartClient.php`;
    return this.http.post(url, data, httpOptions).pipe();
  }
  //Annuler vente appartement
  annuler_vente_appart($c_client,$num_b): Observable<any> {
    const url = `${this.baseUrl}/appartement/annulerVenteAppart.php`;
  console.log("service",$c_client)
    return this.http.post(url,{"NUM_CLIENT":$c_client,"NUM_BIEN":$num_b}, httpOptions).pipe();
  }


  ajouter_payement(data): Observable<any> {
    const url = `${this.baseUrl}/appartement/addPayment.php`;
  
    return this.http.post(url,data, httpOptions).pipe();
  }


get_appart_client($NUM,$NUM_CLIENT,$value){
  const url = `${this.baseUrl}/appartement/getAppartVendu.php`;
  console.log("Service", $NUM);
  return this.http.post(url, { "NUM": $NUM ,"NUM_CLIENT":$NUM_CLIENT,"value":$value}, httpOptions).pipe();
}

//récupérer les appartement libre dans un seul projet

get_free_appartement($NUM){
  const url = `${this.baseUrl}/appartement/getAllFreeAppart.php`;
  console.log("Service", $NUM);
  return this.http.post(url, { "NUM": $NUM }, httpOptions).pipe();
}


get_historique_versement($ID_TRANS){
  const url = `${this.baseUrl}/appartement/getHistoriqueVersement.php`;
  console.log("Service", $ID_TRANS);
  return this.http.post(url, { "ID_TRANS": $ID_TRANS }, httpOptions).pipe();
}

  handleError(handleError: any): any {
    throw new Error('Method not implemented.');
  }
}
