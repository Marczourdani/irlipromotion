import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
};
@Injectable()
export class BalanceProvider {
  baseUrl = 'http://localhost/immobilier';
  constructor(public http: HttpClient) {
    console.log('Hello BalanceProvider Provider');
  }

  get_total_balance($NUM_PROJET) {
    const url = `${this.baseUrl}/total-balance/balance.php`;
    console.log('num_p_balance',$NUM_PROJET);
    return this.http.post(url, { "NUM_PROJET": $NUM_PROJET }, httpOptions).pipe();
  }

  get_detail_dette($NUM_PROJET) {
    const url = `${this.baseUrl}/total-balance/dette.php`;
    console.log('num_p_balance',$NUM_PROJET);
    return this.http.post(url, { "NUM_PROJET": $NUM_PROJET }, httpOptions).pipe();
  }

  get_detail_entree($NUM_PROJET) {
    const url = `${this.baseUrl}/total-balance/entree.php`;
    console.log('num_p_balance',$NUM_PROJET);
    return this.http.post(url, { "NUM_PROJET": $NUM_PROJET }, httpOptions).pipe();
  }






  handleError(handleError: any): any {
    throw new Error('Method not implemented.');
  }
}
