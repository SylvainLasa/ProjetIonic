import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router, Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage {


  public arret:any;
  public arret2:any;
  public id:any;
  public dir:any;
  public dir1:any;
  public dir2:any;

  public arrayA = new Array;
  public arrayB = new Array;

  public direction:boolean =false;



  constructor(public navCtrl: NavController, public http: HttpClient, private router: Router, public route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id =  params.id;
      console.log(this.id);
      this.loadData(this.id);
    });
    //this.loadData();

   }
 



loadData(id: any){
  let spinner = document.getElementById("spinner");
  spinner.hidden = false;
  let data:Observable<any>;
  let data2:Observable<any>;
  data2 = this.http.get('https://data.metromobilite.fr/api/ficheHoraires/json?route=SEM:'+this.id+'&time=');

  data2.subscribe(result2 => {
    this.arret = result2['0']['arrets'];
    this.arret2 = result2['1']['arrets'];

    this.arret.forEach(element => {
      this.arrayA.push((element.stopName));
    });
    this.arret2.forEach(element => {
      this.arrayB.push((element.stopName));
    });
    this.dir = this.arrayA[this.arrayA.length-1];
    this.dir1 = this.dir;
    this.dir2 = this.arrayB[this.arrayB.length-1];

    console.log(this.arrayA);
    spinner.hidden = true;

  })

}

changeDir(dest){
  let spinner = document.getElementById("spinner");
  //let dest1 = document.getElementById("dest1");
  //let dest2 = document.getElementById("dest2");

  spinner.hidden = false;
  this.arrayA = [];
  
  let data2:Observable<any>;
  data2 = this.http.get('https://data.metromobilite.fr/api/ficheHoraires/json?route=SEM:'+this.id+'&time=');
  data2.subscribe(result2 => {
    if (dest == true){
      this.arret = result2['0']['arrets'];
      //this.direction = false;
    }
    else {
      this.arret = result2['1']['arrets'];
      //this.direction = true;
    }
    this.arret.forEach(element => {
      this.arrayA.push((element.stopName));
    });
    this.dir = this.arrayA[this.arrayA.length-1];
    spinner.hidden = true;

  });
}

clicked(string:string){
  this.arret.forEach(element => {
    if (element.stopName==string){
      this.id = element.stopId;
      console.log(element.stopId);
    }
  });
  
  this.router.navigate(['/horaires-page', {id: this.id}]);
}
}
