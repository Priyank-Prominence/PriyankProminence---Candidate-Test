import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLayoutComponent } from '../user-layout/user-layout/user-layout.component';

const routes: Routes = [
  {
    path:'',
    component:UserLayoutComponent,
    loadChildren:()=> import('../user-layout/user-layout.module').then(m => m.UserLayoutModule)
  },
  {
    path: '**',
    redirectTo:'/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
