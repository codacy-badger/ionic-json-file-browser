import { IonicModule } from 'ionic-angular';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { TreeViewComponent } from '../components/tree-view.component';
import { TreeViewHistoryComponent } from '../components/tree-view-history.component';
import { TreeViewHeaderComponent } from '../components/tree-view-header.component';
import { TreeViewListComponent } from '../components/tree-view-list.component';
import { TreeViewDescriptionComponent } from '../components/tree-view-description.component';

import { TreeViewService } from '../services/tree-view.service';
import { ObjectSortingService } from '../services/object-sorting.service';

import { TreeViewState } from '../states/tree-view.state';

@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule,
        NgxsModule.forRoot([
            TreeViewState,
        ]),
        NgxsLoggerPluginModule.forRoot(),
    ],
    declarations: [
        // declare all components that your module uses
        TreeViewComponent,
        TreeViewHistoryComponent,
        TreeViewHeaderComponent,
        TreeViewListComponent,
        TreeViewDescriptionComponent,
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        TreeViewComponent,
        TreeViewHistoryComponent,
        TreeViewHeaderComponent,
        TreeViewListComponent,
        TreeViewDescriptionComponent,
    ]
})
export class TreeViewModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TreeViewModule,
            providers: [TreeViewService, ObjectSortingService]
        };
    }
}