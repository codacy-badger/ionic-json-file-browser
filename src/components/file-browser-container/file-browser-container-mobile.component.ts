import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { LoadingController, ActionSheetController } from 'ionic-angular';
import { FileBrowserList } from '../../services/file-browser-list.service';

@Component({
  selector: 'file-browser-mobile',
  template: `
  <div class="file-browser-container">
    <div class="main">
        <file-browser-history></file-browser-history>
        <file-browser-header></file-browser-header>
        <file-browser-list-mobile></file-browser-list-mobile>
    </div>
  </div>
`,
  styles: [`
  .file-browser-container {
    display: grid;
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgb(255, 255, 255);
    grid-template-columns: auto;
  }

  .main {
    display: grid;
    padding: 0px 0px 15px 15px;
    grid-template-rows: 40px 40px auto;
    border-left: 1px solid #f2f2f2;
    overflow-y: hidden;
  }

  file-browser-list-mobile {
    overflow-y: scroll;
  }

  .sidebar {
    display: grid;
    height: 100%;
  }
  `],
})
export class FileBrowserContainerMobileComponent implements OnInit {
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