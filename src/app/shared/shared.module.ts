import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ]
})
export class SharedModule { }
