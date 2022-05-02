import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentFormComponent } from './components/content/content-form/content-form.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ContentFormComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
