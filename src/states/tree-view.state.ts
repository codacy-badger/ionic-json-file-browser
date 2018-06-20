import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
    Object,
} from './tree-view.model';
import { 
    GenerateTree,
    SortTree,
    GenerateHistory,
    ObjectSelect,
} from './tree-view.actions';
import { ObjectSortingService } from '../services/object-sorting.service';

export interface TreeViewStateModel {
    objects: Object[];
    history: String[];
    objectSelected: Object;
}

@State<TreeViewStateModel>({
    name: 'tree',
    defaults : {
        objects: [],
        history: [],
        objectSelected: <Object>{},
    },
})

export class TreeViewState {
    constructor(private objectSorting: ObjectSortingService) {}

    @Selector()
    static getObjects(state: TreeViewStateModel) {
        return state.objects;
    }

    @Selector()
    static getHistory(state: TreeViewStateModel) {
        return state.history;
    }

    @Selector()
    static getObjectSelected(state: TreeViewStateModel): Object {
        console.log('here');
        return state.objectSelected;
    }

    @Action(GenerateTree)
    generateTree({ getState, patchState }: StateContext<TreeViewStateModel>, { object, directory }: GenerateTree) {
        const state = getState();
        const objects = object.filter(a => a.parent === directory);
        patchState({
            objects: this.objectSorting.sortObjects('name-asc', objects),
            history: [...state.history, directory],
        });
    }

    @Action(SortTree) 
    sortTree({ getState, patchState }: StateContext<TreeViewStateModel>, { field }: SortTree) {
        const state = getState();

        patchState({
            objects: this.objectSorting.sortObjects(field, state.objects),
        });
    }

    @Action(GenerateHistory)
    generateHistory({ getState, patchState }: StateContext<TreeViewStateModel>, { object, directory }: GenerateHistory) {
        const state = getState();
        const index = state.history.indexOf(directory) + 1;
        const objects = object.filter(a => a.parent === directory);

        patchState({
            objects: this.objectSorting.sortObjects('name-asc', objects),
            history: state.history.slice(0, index),
        });
    }

    @Action(ObjectSelect)
    objectSelect({ getState, patchState }: StateContext<TreeViewStateModel>, { object }: ObjectSelect) {
        const state = getState();

        patchState({
            ...state,
            objectSelected: object,
        });
    }
}