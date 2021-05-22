import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {stringify} from "query-string";
import {Observable} from "rxjs";
import {CustomerResponse} from "./model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  href = 'http://localhost:8080/customer';

  constructor(private httpClient: HttpClient) {
  }

  // http://localhost:8080/customer?page=0&size=100&country=237&state=false&sort=id%2Casc

  getGatewayDevices(pageable: any): Observable<CustomerResponse> {

    const requestUrl = `${this.href}?${stringify(pageable)}`;

    return this.httpClient.get<CustomerResponse>(requestUrl);
  }
}

