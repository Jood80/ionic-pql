import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaunchDetailsPageRoutingModule } from './launch-details-routing.module';

import { LaunchDetailsPage } from './launch-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaunchDetailsPageRoutingModule
  ],
  declarations: [LaunchDetailsPage]
})
export class LaunchDetailsPageModule {}
