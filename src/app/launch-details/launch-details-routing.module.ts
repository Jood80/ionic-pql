import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchDetailsPage } from './launch-details.page';

const routes: Routes = [
  {
    path: '',
    component: LaunchDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchDetailsPageRoutingModule {}
