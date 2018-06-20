import { Component, OnInit } from '@angular/core';
import { FileBrowserState } from '../../states/file-browser.state';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Node } from '../../states/file-browser.model';
import { FileBrowserList } from '../../services/file-browser-list.service';
import { NodeSelect } from '../../states/file-browser.actions';

@Component({
    selector: 'file-browser-list-mobile',
    template: `
    <div class="file-browser-list">
        <ion-list>
            <ion-grid class="table-grid">
                <ng-container *ngIf="nodes$">
                    <ng-container *ngFor="let node of nodes$ | async">
                        <a>
                            <ion-row class="grid-item" (click)="showNode(node.id)"
                                    oncontextmenu="return false" (contextmenu)="presentActionSheet()">
                                <ion-col col-7>
                                {{ node.name }}
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
    .file-browser-list {
        display: block;
        height: 100%;
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
export class FileBrowserListMobileComponent implements OnInit {

    @Select(FileBrowserState.getNodes) nodes$: Observable<Node>;

    constructor(public store: Store, public fileBrowserList: FileBrowserList) {}

    ngOnInit() {}

    nodeSelect(node) : void {
        this.store.dispatch(new NodeSelect(node));
    }

    showNode(node) {
        this.fileBrowserList.showNode(node);
    }
}