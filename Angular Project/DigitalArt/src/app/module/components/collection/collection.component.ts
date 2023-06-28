import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../service/data.service';
import {CollectionService} from '../../../service/collection.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit {
  public imageid;
  public collection:any = [];
  public html = "";
  public loading = false;
  constructor( private  dataService: DataService, private  collectionService: CollectionService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.shareParticularImageId.subscribe(x => this.imageid = x);
    this.dataService.shareImageId.subscribe(x => this.imageid = x);
    // console.log(this.imageid);
    this.getCollection();
  }

  generatehtml() {
    this.html = "<div class='row' >"
    // tslint:disable-next-line:prefer-for-of
    for (let i = 1; i <= this.collection.length; i++) {
      if (i % 4 == 1 && i != 1) {
        this.html = this.html + "</div>";
        this.html = this.html + "<div class='row'>";
      }
      this.html = this.html + "<div class='col-sm-3' style='text-align: center;border-style: double;border-color: dodgerblue'> <img style='height: 300px;margin-bottom: 20px;margin-top: 20px' src=' " + this.collection[i-1].url + "  '   /> </div>" ;
    }
    // console.log(this.html);
    var x = document.getElementById("collection") ;
    if (x != null) {
      x.innerHTML = this.html;
    }

  }

  getCollection() {
    this.loading = true;
    this.collectionService.getCollection(this.imageid).subscribe(
      data => {
        this.loading = false;
        this.collection = data['collection'];
        this.generatehtml();
        // console.log(data);
      }, error1 => {
        alert('Error while uploading');
        this.loading = false;
      }
    );
  }
}
