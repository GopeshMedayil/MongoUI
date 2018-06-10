import {ConnectionsComponent} from './connections.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes : Routes = [
    {
        path: '',
        component: ConnectionsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ConnectionsRoutingModule {}