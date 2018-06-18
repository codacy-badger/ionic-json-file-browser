import { NgModule, ModuleWithProviders } from '@angular/core';
import { TreeViewComponent } from './components/tree-view.component';
import { ObjectSortingService } from './services/object-sorting.service';
import { IonicModule } from 'ionic-angular';
 
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        TreeViewComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        TreeViewComponent
    ]
})
export class TreeViewModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TreeViewModule,
            providers: [ObjectSortingService]
        };
    }
}