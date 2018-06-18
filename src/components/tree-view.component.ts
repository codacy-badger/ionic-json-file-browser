import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GenerateTree, SortTree, GenerateHistory } from '.././states/tree-view.actions';
import { ViewTreeState } from '.././states/tree-view.state';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoadingController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'tree-view-component',
  templateUrl: 'tree-view.component.html'
})
export class TreeViewComponent implements OnInit{
  objectSelected: null;
  nameSort: string = 'arrow-down';
  data: null;

  @Select(ViewTreeState.getObjects) objects$: Observable<Object>;

  @Select(ViewTreeState.getHistory) history$: Observable<String>;

  constructor(private store: Store, public navCtrl: NavController, public loadingCtrl: LoadingController,
              public actionSheetCtrl: ActionSheetController) {}

  ngOnInit() {}

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: 'Loading files...',
      duration: 3000
    });
    loader.present();
  }

  generateTree(data) {
    this.data = data;
    this.presentLoading();
    this.store.dispatch(new GenerateTree(<any>data, 'Root'));
  }

  showDirectory(directory) {
    this.store.dispatch(new GenerateTree(<any>this.data, directory));
  }

  showPrevDirectory(directory) {
    this.store.dispatch(new GenerateHistory(<any>this.data, directory));
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