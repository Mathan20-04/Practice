import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {DetailService} from '../../../service/detail.service';
import {DataService} from '../../../service/data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public _detailService;
  public data: any = {};
  public _numberOfImages = 100;
  public clicked = false;
  public loading = false;

  constructor(private detailService: DetailService, private dataService: DataService, private router: Router) {
    this._detailService = detailService;
  }

  ngOnInit(): void {
    this.dataService.share.subscribe(x => this.data = x);
    this.dataService.toGenerateFile.subscribe(x => this.data = x);
  }

  drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
    moveItemInArray(this.data.parts, event.previousIndex, event.currentIndex);
  }

  updatePartOrder() {
    // console.log(this.data.parts);
    this.loading = true;
    let part: any = [];
    for (let i = 0; i < this.data.parts.length; i++) {
      let obj = {};
      obj['part_id'] = this.data.parts[i].part_id;
      obj['order'] = this.data.parts.length + 1 - i;
      part.push(obj);
    }
    this._detailService.updatePart(part).subscribe(
      data => {
        alert('ordered');
        // console.log(data);
        this.generate();
      }, error1 => {
        alert('Error while uploading');
      }
    );
  }

  Submit() {
    // Check if the part order has been done already
    // If yes call generate else call updatePartOrder

    let isPartOrdered = false;
    // for (let i = 0; i < this.data.parts.length; i++) {
    //   let val = this.data.parts[i].order;
    //   if (val !== null && val !== undefined && val !== 0) {
    //     isPartOrdered = true;
    //   }
    //   break;
    // }
    if (isPartOrdered) {
      this.generate();
    } else {
      if (confirm("Are you sure you have arranged the parts properly??")) {
        this.updatePartOrder();
      }
    }
  }

  generate() {
    let obj: object = {};
    obj['image_id'] = this.data.image_id;
    obj['total'] = this._numberOfImages;
    obj['action'] = 'VARIATION';
    this._detailService.generate(obj).subscribe(
      data => {
        alert('generated');
        this.loading = false;
        // console.log(data);
        // this.parts = data.parts;
        this.dataService.particularImagid(this.data.image_id);
        this.router.navigate(['collection']);
      }, error1 => {
        alert('Error while uploading');
        this.loading = false;
      }
    );
  }

}
