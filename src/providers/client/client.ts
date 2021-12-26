import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { client } from '../../models/client.model';

import { Observable } from 'rxjs';
/*
  Generated class for the ClientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json ; charset=UTF-8' })
};

@Injectable()
export class ClientProvider {

  baseUrl = 'http://localhost/immobilier';
  client = [];
  //  data:any;
  constructor(public http: HttpClient) {

  }

  get_all_clients_name() {

    return this.http.get<client[]>(`${this.baseUrl}/client/getAllClient.php`).
      pipe(map((res: client[]) => {
        this.client = res;
        console.log('youuu', this.client);
        return this.client;
      }),
        catchError(this.handleError));

  }

getClients(){
  return this.http.get<client[]>(`${this.baseUrl}/client/getAllClient.php`).
      pipe(map((res: client[]) => {
        this.client = res;
        return this.client;
      }),
        catchError(this.handleError));
}

  get_client_par_num($NUM_CLIENT) {
    const url = `${this.baseUrl}/client/getClientByNum.php`;
    return this.http.post(url, { "NUM_CLIENT": $NUM_CLIENT }, httpOptions).pipe();
  }

  del_client_par_num($NUM_CLIENT) {
    const url = `${this.baseUrl}/client/deleteClient.php`;
    return this.http.post(url, { "NUM_CLIENT": $NUM_CLIENT }, httpOptions).pipe();
  }
  postClient(data): Observable<any> {
    const url = `${this.baseUrl}/client/addClient.php`;

    console.log(data);
    return this.http.post(url, data, httpOptions).pipe();
  }


  updateClient(data): Observable<any> {
    const url = `${this.baseUrl}/client/updateClient.php`;
    console.log(data);
    return this.http.post(url, data, httpOptions).pipe();
  }

  GetFeedSearching($search,$NUM) {
    const url = `${this.baseUrl}/client/search_client_proj.php`;
    //console.log("search term", $search);
    return this.http.post(url,{ 'search': $search,'NUM': $NUM },httpOptions).pipe();
  }


  handleError(handleError: any): any {
    throw new Error('Method not implemented.');
  }
}
