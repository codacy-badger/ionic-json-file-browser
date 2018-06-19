import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController, ActionSheetController } from 'ionic-angular';
import { TreeViewService } from '../services/tree-view.service';

@Component({
  selector: 'tree-view-component',
  template: `
  <div class="grid-container">
    <div class="main">
      <tree-view-history-component></tree-view-history-component>
      <tree-view-header-component></tree-view-header-component>
      <tree-view-list-component></tree-view-list-component>
    </div>
    <div class="sidebar">
      <tree-view-description-component></tree-view-description-component>
    </div>
  </div>
  `,
  styles: [`
  .grid-container {
    display: grid;
    position: absolute;
    height: 100%;
    width: 100%;
    grid-template-columns: auto 300px;
  }

  .main {
    display: grid;
    padding: 0px 15px 15px 15px;
    grid-template-rows: 40px 40px auto;
    overflow-y: auto;
    border-right: 1px solid #f2f2f2;
  }

  .sidebar {
    display: grid;
    height: 100%;
  }
  `],
})
export class TreeViewComponent implements OnInit {
  nameSort: string = 'arrow-down';

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
              public actionSheetCtrl: ActionSheetController, public treeViewService: TreeViewService) {}

  ngOnInit() {
    // this.presentLoading();
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
        content: 'Loading files...',
        duration: 3000
    });
    loader.present();
  }

  // showDirectory(directory) {
  //   this.store.dispatch(new GenerateTree(<any>this.data, directory));
  // }

  // showPrevDirectory(directory) {
  //   this.store.dispatch(new GenerateHistory(<any>this.data, directory));
  // }

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