import { Component, Input, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-unknown-object-list',
  templateUrl: './unknown-object-list.component.html',
  styleUrls: ['./unknown-object-list.component.css']
})

@Injectable()
export class UnknownObjectListComponent implements OnInit {

  properties: any;
  shape_objects: any;
  hostname: any;
  url_shapes: any;
  public shape_id=99;
  public start_date="12/12/2020";
  public start_time="00:00";
  public end_date="12/12/2020";
  public end_time="00:00";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.hostname = window.location.hostname;
    console.log(this.hostname);
    this.url_shapes = "http://"+this.hostname+":5107/interworking/api/v1.0/get_shape_objects";
    this.http.get(this.url_shapes).subscribe(
      data=>{
        this.shape_objects=data;
      }
    );
  }

  clickFunction() {
    this.get_data();
  }

  get_data() {
    let sd = this.start_date;
    sd = sd.replace(/\//g, '-');
    let ed = this.end_date;
    ed = ed.replace(/\//g, '-');
    let url_shapes='http://'+this.hostname+':5107/interworking/api/v1.0/get_video_shapes/all/'+sd+'-'+this.start_time+'/'+ed+'-'+this.end_time;
    this.http.get(url_shapes).subscribe(
      data=>{
        this.properties=data;
      }
    );
  }

}
