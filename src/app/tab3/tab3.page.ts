import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Router, Routes, RouterModule } from '@angular/router';
import { load } from '@angular/core/src/render3';




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})



export class Tab3Page{

  constructor(public navCtrl: NavController, public http: HttpClient, private router: Router) {
   }

  test(id: any){
    console.log(id);
    this.router.navigate(['/modal-page',{id: id}]);
  }

}



