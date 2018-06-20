import { Component, OnInit } from '@angular/core';
import { FileBrowserState } from '../states/file-browser.state';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'sidebar-card',
    template: `
    <div class="sidebar-card">
        <ion-grid>
            <ion-row>
                <ion-col>
                    <ion-card>
                        <ion-card-header>
                            Description
                        </ion-card-header>

                        <ion-card-content>
                            <ion-grid>
                                <ion-row>
                                    <ion-col col-4>
                                        Name
                                    </ion-col>
                                    <ion-col>
                                        <ng-container *ngIf="(objectSelected$ | async).name">
                                            {{ (objectSelected$ | async).name }}
                                        </ng-container>
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col col-4>
                                        Location
                                    </ion-col>
                                    <ion-col>
                                        <ng-container *ngIf="(objectSelected$ | async).parent">
                                            {{ (objectSelected$ | async).parent }}
                                        </ng-container>
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col col-4>
                                        Type
                                    </ion-col>
                                    <ion-col>
                                        <ng-container *ngIf="(objectSelected$ | async).type">
                                            {{ (objectSelected$ | async).type }}
                                        </ng-container>
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col col-4>
                                            Size
                                    </ion-col>
                                    <ion-col>
                                    </ion-col>
                                </ion-row>
                            </ion-grid>
                        </ion-card-content>
                    </ion-card>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
    `,
    styles: [`
    `],
})
export class SidebarCardComponent implements OnInit {
    // @Select(FileBrowserState.getObjectSelected) objectSelected$: Observable<Object>;

    constructor(public store: Store) {}

    ngOnInit() {}
}