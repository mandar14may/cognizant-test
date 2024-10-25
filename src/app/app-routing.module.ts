import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'random',
    pathMatch: 'full'
  },
  {
    path: 'random', 
    loadChildren: () => import('./random-number/random-number.module').then(m=>m.RandomNumberModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
