import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { TreeViewState } from '.././states/tree-view.state';
import { GenerateTree, SortTree, GenerateHistory } from '.././states/tree-view.actions';
import { Observable } from 'rxjs';

@Injectable()
export class TreeViewService {
    data: null;

    // @Select(TreeViewState.getObjects) objects$: Observable<Object>;

    @Select(TreeViewState.getHistory) history$: Observable<String>;

    constructor(private store: Store) {}

    generateTree(data) {
        this.data = data;
        this.store.dispatch(new GenerateTree(<any>data, 'Root'));
    }
}