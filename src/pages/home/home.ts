import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') map: ElementRef;
  constructor(public navCtrl: NavController) {}
  ionViewDidLoad() {
    mapboxgl.accessToken ='provide your own';
    new mapboxgl.Map({
      container: this.map.nativeElement,
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [-122.420679, 37.772537],
      zoom: 13
    });
  }
}
