import { Component, Input, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'unknown-object-card',
  templateUrl: './unknown-object-card.component.html',
  styleUrls: ['./unknown-object-card.component.css']
})
export class UnknownObjectCardComponent implements OnInit {
  @Input() property : any
  postId: any
  @Input() name: any

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  add_known_object(){
    console.log(this.property);
    console.log(this.name)
    this.http.post<any>('http://'+window.location.hostname+':5107/interworking/api/v1.0/create_known_object', { name: this.name, recording_id: this.property.recording_id, frame_nbr: this.property.frame_nbr, snapshot: this.property.snapshot, shape: this.property.shape }).subscribe(data => {
        this.postId = data.id;
    })
  }
}
