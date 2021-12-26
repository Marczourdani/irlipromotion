import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
};

@Injectable()
export class SousTraitantProjetProvider {
  baseUrl = 'http://localhost/immobilier';
  sousTraitant = [];
  constructor(public http: HttpClient) {
   

  }
  get_all_projet_sous_traitant($NUM_PROJET) {
    const url = `${this.baseUrl}/sous-traitant-projet/getAllProjectST.php`;
    console.log('service',$NUM_PROJET)
    return this.http.post(url, { "NUM_PROJET": $NUM_PROJET }, httpOptions).pipe();
  }

  add_sous_traitant_pr(data): Observable<any> {
    const url = `${this.baseUrl}/sous-traitant-projet/addSousTraitantProjet.php`;

    console.log(data);
    return this.http.post(url, data, httpOptions).pipe();
  }
   //payement SOUS TRAIATNT
   add_payement_st(data): Observable<any> {
    const url = `${this.baseUrl}/sous-traitant-projet/addPayementSousTraitant.php`;

    console.log('paye fournisseur',data);
    return this.http.post(url, data, httpOptions).pipe();
  }

  get_projet_sous_traitant_By_Num($NUM_PROJET,$NUM_ST) {
    const url = `${this.baseUrl}/sous-traitant-projet/getDetailByNumST.php`;
    console.log('service',$NUM_PROJET,$NUM_ST )
    return this.http.post(url, { "NUM_PROJET": $NUM_PROJET, "NUM_ST":$NUM_ST }, httpOptions).pipe();
  }

  // detail payement
  get_detail_payement($ID) {
    const url = `${this.baseUrl}/sous-traitant-projet/getDetailPayement.php`;
    console.log('service',$ID )
    return this.http.post(url, { "ID": $ID}, httpOptions).pipe();
  }

  delete_sous_traitant_by_Id($ID) {
    const url = `${this.baseUrl}/sous-traitant-projet/deleteItem.php`;
    console.log('delete by id',$ID );
    return this.http.post(url, { "ID": $ID}, httpOptions).pipe();
  }



  
  handleError(handleError: any): any {
    throw new Error('Method not implemented.');
  }
}
