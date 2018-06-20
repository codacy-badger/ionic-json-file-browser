import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'file-browser-header',
    template: `
    <div class="file-browser-header">
        <ion-row class="grid-header">
            <ion-col col-7 class="grid-column">
            Name&nbsp;&nbsp;
            <ion-icon (click)="sortToggle()"></ion-icon>
            </ion-col>
        </ion-row>
    </div>
    `,
    styles: [`
    .file-browser-header {
        height: 40px;
        align-items: center;
        padding-right: 15px;
    }
    
    .grid-header {
        border-bottom: 1px solid #f2f2f2;
        height: 40px;
        align-items: center;
    }

    .grid-column {
        cursor: pointer;
        font-size: 15px;
    }
    `]
})
export class FileBrowserHeaderComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    // sortToggle(field) {
    //     switch(field) {
    //     case 'name': {
    //         if (this.nameSort === 'arrow-down') {
    //         this.store.dispatch(new SortTree('name-desc'));
    //         this.nameSort = 'arrow-up';
    //         break;
    //         }

    //         if (this.nameSort === 'arrow-up') {
    //         this.store.dispatch(new SortTree('name-asc'));
    //         this.nameSort = 'arrow-down';
    //         break;
    //         }
    //     }
    //     }
    // }
}