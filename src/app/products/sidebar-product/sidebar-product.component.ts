import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sidebar-product',
  templateUrl: './sidebar-product.component.html',
  styleUrls: ['./sidebar-product.component.scss']
})
export class SidebarProductComponent implements OnInit {
  @Input() category: string = '';
  @Output() myEvent = new EventEmitter<string>();

  constructor() { }

  onKeyUp(val: any): void {
    this.myEvent.emit(val);
  }


  ngOnChanges(sample: SimpleChanges): void {
      this.category = sample.category.currentValue + 'njfhdl';
      console.log(sample);
  }
  ngOnInit(): void {
  }

}
