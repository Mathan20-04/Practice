import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hero';
  currentItem = 'Washing machine';
  items = ['item1', 'item2', 'item3', 'item4'];
  
  addItem(newItem: string) {
    this.items.push(newItem);
  }

}