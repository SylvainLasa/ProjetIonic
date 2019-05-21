import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horaires-arrets',
  templateUrl: './horaires-arrets.page.html',
  styleUrls: ['./horaires-arrets.page.scss'],
})
export class HorairesArretsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*
   fetch('https://data.metromobilite.fr/api/routers/default/index/stops/' + value['id'] + '/stoptimes/')
            .then(response => {
              return response.json()
            })
            .then(data => {
              m.addEventListener('click', this.goToHorairesArrets(value['id']));
            })
            .catch(err => {
              // Do something for an error here
            })
  */
}
