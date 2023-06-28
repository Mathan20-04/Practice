import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {FileuploadService} from '../../../service/fileupload.service';
import {Router} from '@angular/router';
import {DataService} from '../../../service/data.service';
import {fakeAsync} from '@angular/core/testing';


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  public _fileUploadService;
  public _title;
  public _description;
  public _metadata;
  public _price ;
  public _width ;
  public _length ;
  public file;
  public text;
  public clicked = false;
  public loading = false;
  public inputfile;
  constructor(fileuploadService: FileuploadService, private router: Router, private dataService: DataService) {
    this._fileUploadService = fileuploadService ;
  }

  ngOnInit(): void {
  }
  public parts = [];

  // tslint:enable:max-line-length

  drop(event: CdkDragDrop<{title: string; poster: string}[]>) {
    moveItemInArray(this.parts, event.previousIndex, event.currentIndex);
  }


  onClick() {
      if(this.inputfile > 0) {
        var json_object = {};
        json_object['title'] = this._title ;
        json_object['description'] = this._description ;
        json_object['metadata'] = this._metadata ;
        json_object['length'] = this._length ;
        json_object['width'] = this._width ;
        json_object['price'] = this._price ;
        this.loading = true;
        this._fileUploadService.upload(this.file, json_object).subscribe(
          data => {
            alert('Uploaded');
            this.loading = false;
            console.log(data);
            // this.parts = data.parts;
            this.dataService.updateData(data);
            this.router.navigate(['detail']);
          }, error1 => {
            alert('Erroe While Uploading');
            alert("Please Choose Correct Zip File");
            this.loading = false;
          }
        );
      } else {
        alert("Please Select a File");
      }
  }

  zip_upload(event){
     this.file = event.target.files[0] ;
     this.inputfile = event.target.files.length;
  }

}
