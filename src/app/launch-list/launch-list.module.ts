import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaunchListPageRoutingModule } from './launch-list-routing.module';

import { LaunchListPage } from './launch-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaunchListPageRoutingModule
  ],
  declarations: [LaunchListPage]
})
export class LaunchListPageModule {}
