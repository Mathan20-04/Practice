import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticateUrl = 'main/authentication/authenticate';

  private httpClient;
  private httpHeader;
  constructor(http: HttpClient) {
    this.httpClient = http;
  }


}
