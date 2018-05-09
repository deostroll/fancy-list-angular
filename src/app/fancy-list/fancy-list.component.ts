import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fancy-list',
  template: `
    <ul class="my-list">
      <li *ngFor="let item of items">{{item}}</li>
    </ul>
  `,
  styleUrls: ['./fancy-list.component.css']
})
export class FancyListComponent implements OnInit {
  items = [];
  @Input() list : string = ''
  constructor() { }

  ngOnInit() {
    this.items = this.list.split(',');
  }

}
