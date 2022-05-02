import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ContentsComponent } from './page/contents/contents.component';
import { ContactComponent } from './page/contact/contact.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./page/home/home.module').then(module => module.HomeModule)
      },
      {
        path: 'contents',
        component: ContentsComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
      ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
