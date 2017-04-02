import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() viewChangeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeView(view: string) {
    this.viewChangeEvent.emit(view);
  }
}
