import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { LoadingController, ActionSheetController } from 'ionic-angular';
import { FileBrowserList } from '../../services/file-browser-list.service';

@Component({
  selector: 'file-browser-core',
  template: `
  <div class="file-browser-container">
    <div class="sidebar">
    </div>
    <div class="main">
        <file-browser-history></file-browser-history>
        <file-browser-header></file-browser-header>
        <file-browser-list></file-browser-list>
    </div>
  </div>
`,
  styles: [`
  .file-browser-container {
    display: grid;
    position: absolute;
    height: 100%;
    width: 100%;
    grid-template-columns: 45% 55%;
  }

  .main {
    display: grid;
    padding: 0px 0px 15px 15px;
    grid-template-rows: 40px 40px auto;
    border-left: 1px solid #f2f2f2;
    overflow-y: hidden;
  }

  file-browser-list {
    overflow-y: scroll;
  }

  .sidebar {
    display: grid;
    height: 100%;
  }
  `],
})
export class FileBrowserContainerCoreComponent implements OnInit {
  nameSort: string = 'arrow-down';

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
              public actionSheetCtrl: ActionSheetController, public fileBrowserList: FileBrowserList) {
  }

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
}