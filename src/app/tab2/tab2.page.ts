import { Component, ViewChild, ElementRef } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker, icon } from 'leaflet';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReadKeyExpr } from '@angular/compiler';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  map: Map;
  lat: number = 45.188096;
  lng: number =  5.718452;
  options : GeolocationOptions;
  currentPos : Geoposition;
  items : any;

  ionViewDidEnter() {
    //this.getUserPosition();
    this.loadMap();
  }

  constructor() {
  }

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

      fetch('https://data.metromobilite.fr/api/bbox/json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data['features'])
        console.log(data['features']['0']['geometry']['coordinates']['0']);
        let id = 0;
        data['features'].forEach((value) => {
          marker([value['geometry']['coordinates']['1'],value['geometry']['coordinates']['0']], {
            icon: icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: 'leaflet/marker-icon.png',
              shadowUrl: 'leaflet/marker-shadow.png'
            })
          }).addTo(this.map)
          .bindPopup('Salut <br> ça va?');
          id += 1;
          let BreakException = {};
          if(id == 300) throw BreakException;
        });
      })
      .catch(err => {
        // Do something for an error here
      })

      /*marker([,], {
        icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png'
        })
      }).addTo(this.map)
      .bindPopup('Salut <br> ça va?');*/

    }, 50);
      
    };

    getUserPosition(){
      this.options = {
          enableHighAccuracy : true
      };
  
      /*this.geolocation.getCurrentPosition().then((pos : Geoposition) => {
  
          this.currentPos = pos;      
          console.log(pos);
  
      },(err : PositionError)=>{
          console.log("error : " + err.message);
      });*/
  }



  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }

}