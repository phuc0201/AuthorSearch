import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  { path: '', redirectTo: 'author-search', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
