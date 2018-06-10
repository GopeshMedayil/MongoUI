import {MaterialModule} from './../material.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConnectionsRoutingModule} from './connections-routing.module';

import {ConnectionsComponent} from './connections.component';

@NgModule({
  imports: [
    CommonModule, ConnectionsRoutingModule, MaterialModule
  ],
  declarations: [ConnectionsComponent]
})
export class ConnectionsModule {}