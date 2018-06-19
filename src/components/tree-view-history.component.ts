import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tree-view-history-component',
    template: `
    <div class="tree-view-history-header">
    <ion-row class="grid-header">
        <ng-container *ngFor="let history of history$ | async">
            <ion-icon class="history-arrow" name="ios-arrow-forward">&nbsp;&nbsp;</ion-icon>
            <a (click)="showPrevDirectory(history)">{{ history }} &nbsp;</a>
        </ng-container>
    </ion-row>
</div>
    `,
    styles: [`
    .tree-view-history-header {
        height: 40px;
        align-items: center;
        padding-right: 15px;
        font-size: 20px;
    }

    .icon {
        font-size: 15px;
    }
    
    `]
})
export class TreeViewHistoryComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}