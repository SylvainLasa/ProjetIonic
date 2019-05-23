import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-horaires-arrets',
  templateUrl: './horaires-arrets.page.html',
  styleUrls: ['./horaires-arrets.page.scss'],
})
export class HorairesArretsPage implements OnInit {

  public id: any;
  public times: any;
  public pattern:any;
  public horaires:any;
  public arrayH = new Array;
  public arrayD = new Array;
  public direction: any;
  public nomArret: any;
  public lines: any;

  constructor(private route: ActivatedRoute, public http: HttpClient) { 
    this.route.params.subscribe(params => {
      this.id =  params.id;
      let nom = String(params.name)
      this.lines = params.lines;
      if(nom.startsWith('GRENOBLE,')){
        this.nomArret =  (params.name).substring(9,100);
      }else{
        this.nomArret =  params.name;
      }
      console.log(this.id);
      this.loadData(this.id);
      console.log(this.arrayH);
      
    });
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
      console.log(result)
      let nbElem: any = 0;
      result.forEach(element => {
        console.log(element)
        this.arrayD.push(element['pattern']['desc']);
        this.times = element['times'];
        //this.pattern.push(element['pattern']);
        //this.arrayH.push(this.pattern.desc);
        this.times.forEach(element2 => {
          this.calcul(element2.scheduledArrival, element['pattern']['desc']);
          spinner3.hidden = true;
        });
        nbElem += 1;
      });
  
    })  
  
  }

  calcul(time:number, arrayD){
    let currentSeconds = this.time();
    this.horaires = (time - currentSeconds) / 60;
    this.horaires = Math.trunc(this.horaires);
    if (this.horaires<1){
      this.horaires = ">1"
    }
    this.arrayH.push([arrayD, this.horaires]);
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
