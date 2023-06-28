import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../../service/search.service';
import {Router} from '@angular/router';
import {DataService} from '../../../service/data.service';
import {fakeAsync} from '@angular/core/testing';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public imageList: any = [];
  public imageid;
  public _searchValue;
  public loading = false;
  public totalCollection;
  public fileData;
  public _pageNum = 1;
  public _pageSize = 1000;
  public _numPages = 0;
  public totalRec = 0;
  constructor(private searchService: SearchService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.totalRec = 0;
    this.getImageList();
  }

  getImageList() {
    let params: object = {};
    params['q'] = "" ;
    params['page_num'] = this._pageNum;
    params['page_size'] = this._pageSize;
    this.loading = true;
    this.searchService.getImageList(params).subscribe(
      data => {
        if (data == null ) {
          this.totalRec = 0;
          this._numPages = 0;
          return;
        }
        this.loading = false;
        this.totalRec = data.pages.total_records;
        this._numPages = data.pages.total_pages;
        // console.log("search",data);
        this.imageList = data['data'];
        // console.log("imagelist", this.imageList);
        // this.rows = this.collection.length/4;
        // this.parts = data.parts;
        // this.dataService.updateData(data);
      }, error1 => {
        alert('Error');
      }
    );
  }

  collections(data, totalCollection, image_id) {
    // console.log(data);
    this.imageid = image_id;
    this.totalCollection = totalCollection;
    this.fileData = data;
    if (this.totalCollection === '0' || this.totalCollection === 0) {
      alert("Please Generate for Collection");
      this.dataService.generateFile(this.fileData);
      this.router.navigate(['detail']);
    } else {
      this.dataService.updateImageid(this.imageid);
      this.router.navigate(['collection']);
    }

  }

  search() {
    let param: object = {};
    param['q'] = this._searchValue ;
    param['page_num'] = this._pageNum;
    param['page_size'] = this._pageSize ;
    this.loading = true;
    this.searchService.getImageList(param).subscribe(
      data => {
        this.totalRec = data.pages.total_records;
        this._numPages = data.pages.total_pages;
        this.loading = false;
        // console.log("search",data);
        this.imageList = data['data'];
        // console.log("imagelist", this.imageList);
        // this.rows = this.collection.length/4;
        // this.parts = data.parts;
        // this.dataService.updateData(data);
      }, error1 => {
        alert('Error');
        this.loading = false;
      }
    );
  }

  onScrollDown() {
    if (this._pageNum < this._numPages) {
      this._pageNum++;
      this.getImageList();
    }
  }
}
