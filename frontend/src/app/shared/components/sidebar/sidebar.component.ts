import { Component, OnInit } from '@angular/core';

import { faTachometerAlt, faCalendarAlt, faBook, faCog, faAngleDown, faAlignLeft, faHome, faIdCard, faToolbox, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  status = true;

  faTachometerAlt = faTachometerAlt;
  faCalendarAlt = faCalendarAlt;
  faBook = faBook;
  faCog = faCog;
  faAngleDown = faAngleDown;
  faAlignLeft = faAlignLeft;
  faHome = faHome;
  faIdCard = faIdCard;
  faToolbox = faToolbox;
  faPhoneVolume = faPhoneVolume;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  toggle() {
    this.status = !this.status;
  }

}
