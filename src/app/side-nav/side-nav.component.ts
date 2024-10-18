import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  isExpanded = false;  // Tracks if the sidenav is expanded
  sidenavOpened = true;  // Controls if the sidenav is opened or closed

  // Toggles the expanded state
  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }
}
