import { Component, OnInit } from '@angular/core';

import { faTachometerAlt, faCalendarAlt, faBook, faCog, faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  faTachometerAlt = faTachometerAlt;
  faCalendarAlt = faCalendarAlt;
  faBook = faBook;
  faCog = faCog;
  faAngleDown = faAngleDown;

  constructor() { }

  ngOnInit(): void {
  }

}
