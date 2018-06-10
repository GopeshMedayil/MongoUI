import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes : Routes = [
    {
        path: 'connections',
        loadChildren: './connections/connections.module#ConnectionsModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}