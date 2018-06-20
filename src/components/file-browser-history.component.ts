import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { FileBrowserState } from '../states/file-browser.state'
import { FileBrowserList } from '../services/file-browser-list.service';

@Component({
    selector: 'file-browser-history',
    template: `
    <div class="file-browser-history">
    <ion-row class="grid-header">
        <ng-container *ngFor="let history of history$ | async">
            <ion-icon class="history-arrow" name="ios-arrow-forward">&nbsp;&nbsp;</ion-icon>
            <a (click)="showPrevNode(history.id)">{{ history.name }} &nbsp;</a>
        </ng-container>
    </ion-row>
</div>
    `,
    styles: [`
    .file-browser-history {
        height: 40px;
        align-items: center;
        padding-right: 15px;
        font-size: 20px;
    }

    .icon {
        font-size: 15px;
    }

    .grid-header {
        border-bottom: 1px solid #f2f2f2;
        height: 40px;
        align-items: center;
    }
    `]
})
export class FileBrowserHistoryComponent implements OnInit {
    @Select(FileBrowserState.getHistory) history$: Observable<String>;

    constructor(private fileBrowserList: FileBrowserList) {}

    ngOnInit() {}

    showPrevNode(node) {
        this.fileBrowserList.showPrevNode(node);
    }
}