import { Component, OnInit } from '@angular/core';
import { TreeViewState } from '../states/tree-view.state';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Object } from '../states/tree-view.model';
import { TreeViewService } from '../services/tree-view.service';
import { ObjectSelect } from '../states/tree-view.actions';

@Component({
    selector: 'tree-view-list-component',
    template: `
    <div class="list-container">
        <ion-list>
            <ion-grid class="table-grid">
                <ng-container *ngIf="objects$">
                    <ng-container *ngFor="let object of objects$ | async">
                        <a>
                            <ion-row class="grid-item" (click)="objectSelect(object)" (dblclick)="showDirectory(object.name)"
                                    oncontextmenu="return false" (contextmenu)="presentActionSheet()">
                                <ion-col col-7>
                                {{ object.name }}
                                </ion-col>
                                <ion-col>
                                {{ object.type }}
                                </ion-col>
                                <ion-col>
                                </ion-col>
                            </ion-row>
                        </a>
                    </ng-container>
                </ng-container>
            </ion-grid>
        </ion-list>
    </div>
    `,
    styles: [`
    .list-container {
        display: block;
        height: 100%;
        overflow-y: scroll;
    }

    .table-grid {
        padding-right: 0px;
    }
    
    .grid-item {
        border-bottom: 1px solid #f2f2f2;
        height: 40px;
        align-items: center;
    }
    
    .grid-item:hover {
        cursor: pointer;
        border: 2px solid #4d4d4d;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
        transition: box-shadow 0.1s ease-in-out;
    }
    `],
})
export class TreeViewListComponent implements OnInit {

    @Select(TreeViewState.getObjects) objects$: Observable<Object>;

    constructor(public store: Store, public treeViewService: TreeViewService) {}

    ngOnInit() {}

    objectSelect(object) : void {
        this.store.dispatch(new ObjectSelect(object));
    }
}