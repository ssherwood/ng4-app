import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedView: string = "recipes";

  ngOnInit(): void {
    firebase.initializeApp({
    });
  }

  onMenuItemSelected(menuItem: string) {
    this.selectedView = menuItem;
  }
}
