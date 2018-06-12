import {MaterialModule} from './../material.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConnectionsRoutingModule} from './connections-routing.module';

import {ConnectionsComponent} from './connections.component';
import {NewConnectionDialogComponent} from './components/new-connection-dialog/new-connection-dialog.component';

@NgModule({
  imports: [
    CommonModule, ConnectionsRoutingModule, MaterialModule
  ],
  declarations: [
    ConnectionsComponent, NewConnectionDialogComponent
  ],
  entryComponents: [NewConnectionDialogComponent]
})
export class ConnectionsModule {}