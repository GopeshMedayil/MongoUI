import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './../material.module';

import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule, MaterialModule, RouterModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class SharedModule {}