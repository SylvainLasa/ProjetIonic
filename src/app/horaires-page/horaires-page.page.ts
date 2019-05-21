import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-horaires-page',
  templateUrl: './horaires-page.page.html',
  styleUrls: ['./horaires-page.page.scss'],
})
export class HorairesPagePage implements OnInit {

  public id: any;
  public times:any;
  public pattern:any;
  public horaires:any;
  public arrayH = new Array;
  public direction: any;



  constructor(private route: ActivatedRoute, public http: HttpClient) {
    this.route.params.subscribe(params => {
      this.id =  params.id;
      console.log(this.id);
      this.loadData(this.id);
    });
    console.log(this.arrayH);
   }

  ngOnInit() {
  }

  time(){
    var currentdate = new Date();
    var hours = currentdate.getHours() * 3600;
    var minutes = currentdate.getMinutes() * 60;
    var secondes = currentdate.getSeconds(); 
    var currentSeconds = hours + minutes + secondes;
    return currentSeconds;
  }
  

loadData(id:any){
  let spinner3 = document.getElementById("spinner3");
  spinner3.hidden = false;
  this.id = this.id.slice(4);
  let currentSeconds = this.time();
  let data:Observable<any>;
  let dataInverse:Observable<any>;
  data = this.http.get('https://data.metromobilite.fr/api/routers/default/index/stops/'+id+'/stoptimes');
  data.subscribe(result => {
    this.times = result['0']['times'];
    this.pattern = result['0']['pattern'];
    this.times.forEach(element => {
      this.calcul(element.scheduledArrival);
      spinner3.hidden = true;

    });
    this.direction = this.pattern.desc;

  })


}


calcul(time:number){
  let currentSeconds = this.time();
  this.horaires = (time - currentSeconds) / 60;
  this.horaires = Math.trunc(this.horaires);
  if (this.horaires<1){
    this.horaires = ">1"
  }
  this.arrayH.push(this.horaires);
}

}
