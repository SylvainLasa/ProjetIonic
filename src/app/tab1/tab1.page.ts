import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  favoris = new Array;
  
  constructor(private router: Router, private storage: Storage) {}

  goToAddFav(){
    this.router.navigate(['/add-favoris']);
  }

  ionViewWillEnter(){
    this.getData()
  }

  ngOnInit() {
    //this.clearStorage()
  }

  getData() {
    this.storage.get('favoris').then((val) => {
      this.favoris = val;
    });
  }
  
  clearStorage(){
    this.storage.clear()
    this.favoris = ["Travail", "78 rue Jean Jaures"];
    this.storage.set('favoris', [this.favoris]);
  }
}
