import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-add-favoris',
  templateUrl: './add-favoris.page.html',
  styleUrls: ['./add-favoris.page.scss'],
})
export class AddFavorisPage implements OnInit {

  nom:string
  adr:string
  favoris = new Array;
  constructor(public keyboard: Keyboard, private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.storage.get('favoris').then((val) => {
      this.favoris = val;
      console.log(this.favoris)
    });
    this.keyboard.show();
  }

  saveData() {
    this.nom = (<HTMLInputElement>document.getElementById('nom')).value;
    this.adr = (<HTMLInputElement>document.getElementById('adr')).value;
    console.log(this.favoris)
    this.favoris.push([this.nom,this.adr])
    console.log(this.favoris)
    this.storage.set('favoris', this.favoris);
    this.router.navigate(['/tabs/tab1']);
  }
}