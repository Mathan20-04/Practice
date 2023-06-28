import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  private _urlPartOrder = "http://etherart-api.itfyme.com/api/main/image/part-order";
  private _urlGenerate = "http://etherart-api.itfyme.com/api/main/image/generate";
  private _urlGetList = "main/image/get-list";

  private httpHeaders;
  private httpClient;


  constructor(http:HttpClient) {
    this.httpClient = http;
  }

  updatePart( paramsObject: []): any {
    try {
      const formData = new FormData();

      formData.append("part_order", JSON.stringify(paramsObject));

      const wsURL = this._urlPartOrder;

      return this.httpClient.post(
        wsURL,
        formData,
        {
          headers: this.httpHeaders,
          withCredentials: true,
          responseType: 'json'
        }
      )
        .pipe(
          map((response: Response) => {
            if (response['response_object'] === undefined) {
              return response;
            } else {
              return response['response_object'];
            }
          })
        );
    } catch (e) {
      console.log("Error");
    }
  }

  generate( paramsObject: object): any {
    try {
      const formData = new FormData();
      formData.append("generate_json", JSON.stringify(paramsObject));

      const wsURL = this._urlGenerate;

      return this.httpClient.post(
        wsURL,
        formData,
        {
          headers: this.httpHeaders,
          withCredentials: true,
          responseType: 'json'
        }
      )
        .pipe(
          map((response: Response) => {
            if (response['response_object'] === undefined) {
              return response;
            } else {
              return response['response_object'];
            }
          })
        );
    } catch (e) {
      console.log("Error");
    }
  }
}
