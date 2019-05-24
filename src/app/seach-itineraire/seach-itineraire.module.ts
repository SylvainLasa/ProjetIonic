import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SeachItinerairePage } from './seach-itineraire.page';

const routes: Routes = [
  {
    path: '',
    component: SeachItinerairePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SeachItinerairePage]
})
export class SeachItinerairePageModule {}
