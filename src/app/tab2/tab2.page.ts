import { Component, ViewChild, ElementRef } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker, icon, LatLng } from 'leaflet';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  map: Map;
  lat: number = 45.188096;
  lng: number =  5.718452;
  items : any;
  positionX : any;
  positionY : any;

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap() {
    setTimeout(() => {
      this.map = new Map('map');
  
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy;',
        maxZoom: 18
      }).addTo(this.map);
      this.map.locate({
        setView: true,
        maxZoom: 14,
        enableHighAccuracy:true
      }).on('locationfound', <LeafletMouseEvent>(e) => {
        marker([e.latitude,e.longitude], {
          icon: icon({
            iconSize: [ 25, 41 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: 'leaflet/marker-icon.png',
            shadowUrl: 'leaflet/marker-shadow.png'
          })
        }).addTo(this.map)
        .bindPopup('Salut <br> ça va?');
        })
      // affichage marker arret
      this.loadMarker();
    }, 50);
      
    };

  loadMarker(){
    this.map.locate({
      setView: true,
      maxZoom: 14,
      enableHighAccuracy:true
    }).on('locationfound', <LeafletMouseEvent>(e) => {
    console.log('http://data.metromobilite.fr/api/linesNear/json?x=' + e.longitude.toString() + '&y=' + e.latitude.toString() + '&dist=1000&details=true')
    fetch('http://data.metromobilite.fr/api/linesNear/json?x=' + e.longitude.toString() +
          '&y=' + e.latitude.toString() + '&dist=1000&details=true')
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then(data => {
        console.log(data);
        data.forEach((value) => {
          console.log(value['lon'])
          marker([value['lat'],value['lon']], {
            icon: icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: 'leaflet/marker-icon.png',
              shadowUrl: 'leaflet/marker-shadow.png'
            })
          }).addTo(this.map)
          .bindPopup('Salut <br> ça va?');
        });
      })
      .catch(err => {
        // Do something for an error here
      })
    })
  }


  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }

}