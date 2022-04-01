import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchListPage } from './launch-list.page';

const routes: Routes = [
  {
    path: '',
    component: LaunchListPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchListPageRoutingModule {}
