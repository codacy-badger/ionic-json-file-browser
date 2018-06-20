import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { FileBrowserState } from '../states/file-browser.state';
import { GenerateFileBrowser, SortField, GenerateHistory } from '../states/file-browser.actions';
import { Observable } from 'rxjs';

@Injectable()
export class FileBrowserList {
    data: null;

    constructor(private store: Store) {}

    generateFileBrowser(data) {
        this.data = data;
        this.store.dispatch(new GenerateFileBrowser(<any>data, 0));
    }

    showNode(node) {
        this.store.dispatch(new GenerateFileBrowser(<any>this.data, node));
    }

    showPrevNode(node) {
        this.store.dispatch(new GenerateHistory(<any>this.data, node));
    }


  // sortToggle(field) {
  //   switch(field) {
  //     case 'name': {
  //       if (this.nameSort === 'arrow-down') {
  //         this.store.dispatch(new SortTree('name-desc'));
  //         this.nameSort = 'arrow-up';
  //         break;
  //       }

  //       if (this.nameSort === 'arrow-up') {
  //         this.store.dispatch(new SortTree('name-asc'));
  //         this.nameSort = 'arrow-down';
  //         break;
  //       }
  //     }
  //   }
  // }

  // presentActionSheet() {
  //   let actionSheet = this.actionSheetCtrl.create({
  //     title: 'Options',
  //     buttons: [
  //       {
  //         text: 'New Folder',
  //         handler: () => {
  //           console.log('New folder clicked');
  //         }
  //       }
  //     ]
  //   });

  //   actionSheet.present();
  // }
}