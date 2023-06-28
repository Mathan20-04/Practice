import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _urlGetImageList = "http://etherart-api.itfyme.com/api/main/image/get-list-object-page";

  private httpHeaders;
  private httpClient;
  constructor(http: HttpClient) {
    this.httpClient = http;
  }
  getImageList(paramsObject: object): any {
    try {
      const formData = new FormData();

      const wsURL = this._urlGetImageList;

      return this.httpClient.get(
        wsURL,
        {
          params: paramsObject
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


