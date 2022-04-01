import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'launch-list',
    pathMatch: 'full',
  },
  {
    path: 'launch-list',
    loadChildren: () =>
      import('./launch-list/launch-list.module').then(
        (m) => m.LaunchListPageModule
      ),
  },
  {
    path: 'launch-details/:id',
    loadChildren: () =>
      import('./launch-details/launch-details.module').then(
        (m) => m.LaunchDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
