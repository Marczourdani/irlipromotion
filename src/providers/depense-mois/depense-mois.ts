import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
};
@Injectable()
export class DepenseMoisProvider {
  baseUrl = 'http://localhost/immobilier';

  constructor(public http: HttpClient) {
    console.log('Hello DepenseMoisProvider Provider');
  }

  get_depense_mois($NUM_PROJET,$YEAR,$MONTH,$TYPE,$TYPE2,$QUERY) {
    const url = `${this.baseUrl}/depense/depenseMois.php`;
    console.log('num_p_depense_mois',$NUM_PROJET);
    console.log('num_p_depense_mois',$YEAR);
    return this.http.post(url, { "NUM_PROJET": $NUM_PROJET,"YEAR": $YEAR,"MONTH": $MONTH,"TYPE": $TYPE,"TYPE2": $TYPE2, "QUERY":$QUERY}, httpOptions).pipe();
  }

  get_date($NUM_PROJET) {
    const url = `${this.baseUrl}/depense/datePaye.php`;
    console.log('date',$NUM_PROJET);
    return this.http.post(url, { "NUM_PROJET": $NUM_PROJET}, httpOptions).pipe();
  }

  handleError(handleError: any): any {
    throw new Error('Method not implemented.');
  }

}
