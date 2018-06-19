import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tree-view-header-component',
    template: `
    <div class="tree-view-header">
        <ion-row class="grid-header">
            <ion-col col-7 class="grid-header-1">
            Name&nbsp;&nbsp;
            <ion-icon [name]="nameSort" (click)="sortToggle('name')"></ion-icon>
            </ion-col>
            <ion-col class="grid-header-2">
            Type&nbsp;&nbsp;
            </ion-col>
            <ion-col class="grid-header-3">
            Size&nbsp;&nbsp;
            </ion-col>
        </ion-row>
    </div>
    `,
    styles: [`
    .tree-view-header {
        height: 40px;
        align-items: center;
        padding-right: 15px;
    }
    
    .grid-header {
        border-bottom: 1px solid #f2f2f2;
        height: 40px;
        align-items: center;
    }

    .grid-header-1, .grid-header-2, .grid-header-3 {
        cursor: pointer;
        font-size: 15px;
    }
    `]
})
export class TreeViewHeaderComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}