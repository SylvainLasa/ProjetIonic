import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HorairesArretsPage } from './horaires-arrets.page';

const routes: Routes = [
  {
    path: '',
    component: HorairesArretsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HorairesArretsPage]
})
export class HorairesArretsPageModule {}
