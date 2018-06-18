import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GenerateTree, SortTree, GenerateHistory } from '.././states/tree-view.actions';
import { ViewTreeState } from '.././states/tree-view.state';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';  
import * as data from './data.json';
import { LoadingController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'tree-view',
  templateUrl: 'tree-view.html'
})
export class TreeViewComponent implements OnInit{
  objectSelected: null;
  nameSort: string = 'arrow-down';

  @Select(ViewTreeState.getObjects) objects$: Observable<Object>;

  @Select(ViewTreeState.getHistory) history$: Observable<String>;

  constructor(private store: Store, public navCtrl: NavController, public loadingCtrl: LoadingController,
              public actionSheetCtrl: ActionSheetController) {}

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: 'Loading files...',
      duration: 3000
    });
    loader.present();
    this.store.dispatch(new GenerateTree(<any>data, 'Root'));
  }

  ngOnInit() {
    this.presentLoading();
  }

  showDirectory(directory) {
    this.store.dispatch(new GenerateTree(<any>data, directory));
  }

  showPrevDirectory(directory) {
    this.store.dispatch(new GenerateHistory(<any>data, directory));
  }

  sortToggle(field) {
    switch(field) {
      case 'name': {
        if (this.nameSort === 'arrow-down') {
          this.store.dispatch(new SortTree('name-desc'));
          this.nameSort = 'arrow-up';
          break;
        }

        if (this.nameSort === 'arrow-up') {
          this.store.dispatch(new SortTree('name-asc'));
          this.nameSort = 'arrow-down';
          break;
        }
      }
    }
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Options',
      buttons: [
        {
          text: 'New Folder',
          handler: () => {
            console.log('New folder clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
}