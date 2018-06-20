import { Component, OnInit } from '@angular/core';
import { TreeViewState } from '../states/tree-view.state';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'tree-view-description-component',
    template: `
    <div class="tree-view-description">
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
                                        <ng-container *ngIf="objectSelected$">
                                            {{ objectSelected$.name }}
                                        </ng-container>
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col col-4>
                                        Location
                                    </ion-col>
                                    <ion-col>
                                        <ng-container *ngIf="objectSelected$">
                                            {{ objectSelected$.parent }}
                                        </ng-container>
                                    </ion-col>
                                </ion-row>
                                <ion-row>
                                    <ion-col col-4>
                                        Type
                                    </ion-col>
                                    <ion-col>
                                        <ng-container *ngIf="objectSelected$">
                                            {{ objectSelected$.type }}
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
export class TreeViewDescriptionComponent implements OnInit {
    @Select(TreeViewState.getObjectSelected) objectSelected$: Observable<Object>;

    constructor(public store: Store) {}

    ngOnInit() {}
}