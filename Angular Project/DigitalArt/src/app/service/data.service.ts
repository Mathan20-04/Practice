import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  private content = new BehaviorSubject<any>("Default Data");

  public share = this.content.asObservable();
  updateData(text) {
    this.content.next(text);
  }

  public shareImageId = this.content.asObservable();
  updateImageid(text) {
    this.content.next(text);
  }

  public shareParticularImageId = this.content.asObservable();
  particularImagid(text) {
    this.content.next(text);
  }

  public toGenerateFile = this.content.asObservable();
  generateFile(text) {
    this.content.next(text);
  }

 }
