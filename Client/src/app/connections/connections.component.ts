import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewConnectionDialogComponent} from './components/new-connection-dialog/new-connection-dialog.component';

@Component({selector: 'app-connections', templateUrl: './connections.component.html', styleUrls: ['./connections.component.css']})
export class ConnectionsComponent implements OnInit {

  constructor(private dialog : MatDialog) {}

  ngOnInit() {}

  openAddConnectionModal() : void {
    this
      .dialog
      .open(NewConnectionDialogComponent, {width: '600px'})
  }

}
