import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Router, Routes, RouterModule } from '@angular/router';




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})



export class Tab3Page {


  public arret:any;
  public id:any;

  public arrayH = new Array;
  public arrayA = new Array;



  constructor(public navCtrl: NavController, public http: HttpClient, private router: Router) {
    this.loadData();
    console.log(this.arrayH);

   }
 



loadData(){
  let data:Observable<any>;
  let data2:Observable<any>;
  //data = this.http.get('https://data.metromobilite.fr/api/routers/default/index/stops/SEM:3207/stoptimes');
  data2 = this.http.get('https://data.metromobilite.fr/api/ficheHoraires/json?route=SEM:C&time=');
  /*data.subscribe(result => {
    this.times = result['0']['times'];
    this.pattern = result['0']['pattern'];
    this.times.forEach(element => {
      this.calcul(element.scheduledArrival);
    });

  })*/
  data2.subscribe(result2 => {
    this.arret = result2['0']['arrets'];
    this.arret.forEach(element => {
      this.arrayA.push((element.stopName));
    });
  })

  //console.log(this.arrayA);
}


clicked(string:string){
  this.arret.forEach(element => {
    if (element.stopName==string){
      this.id = element.stopId;
    }
  });
  
  //console.log('https://data.metromobilite.fr/api/routers/default/index/stops/'+this.id+'/stoptimes');
  this.router.navigate(['/modal-page', {id: this.id}]);
}

}



