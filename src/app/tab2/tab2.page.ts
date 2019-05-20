import { Component, ViewChild, ElementRef } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker, icon } from 'leaflet';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  map: Map;
  lat: number = 45.188096;
  lng: number =  5.718452;

  ionViewDidEnter() { this.loadMap(); }

  loadMap() {
    setTimeout(() => {
      this.map = new Map('map').setView([this.lat, this.lng], 12);
  
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy;',
        maxZoom: 18
      }).addTo(this.map);
      marker([45.188096, 5.718452], {
        icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png'
        })
      }).addTo(this.map)
      .bindPopup('Salut <br> ça va?');

    }, 50);
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }

}
