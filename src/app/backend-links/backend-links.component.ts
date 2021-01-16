import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-backend-links',
  templateUrl: './backend-links.component.html',
  styleUrls: ['./backend-links.component.scss']
})
export class BackendLinksComponent implements OnInit {
  hostname: any;

  constructor() { }

  ngOnInit() {
    this.hostname = window.location.hostname;
  }

}
