import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
    Object,
} from './tree-view.model';
import { 
    GenerateTree,
    SortTree,
    GenerateHistory,
} from './tree-view.actions';
import { ObjectSortingService } from '../services/object-sorting.service';

export interface ViewTreeStateModel {
    objects: Object[];
    history: String[];
}

@State<ViewTreeStateModel>({
    name: 'tree',
    defaults : {
        objects: [],
        history: [],
    },
})

export class ViewTreeState {
    constructor(private objectSorting: ObjectSortingService) {}

    @Selector()
    static getObjects(state: ViewTreeStateModel) {
        return state.objects;
    }

    @Selector()
    static getHistory(state: ViewTreeStateModel) {
        return state.history;
    }

    @Action(GenerateTree)
    generateTree({ getState, patchState }: StateContext<ViewTreeStateModel>, { object, directory }: GenerateTree) {
        const state = getState();
        const objects = object.filter(a => a.parent === directory);
        patchState({
            objects: this.objectSorting.sortObjects('name-asc', objects),
            history: [...state.history, directory],
        });
    }

    @Action(SortTree) 
    sortTree({ getState, patchState }: StateContext<ViewTreeStateModel>, { field }: SortTree) {
        const state = getState();

        patchState({
            objects: this.objectSorting.sortObjects(field, state.objects),
        });
    }

    @Action(GenerateHistory)
    generateHistory({ getState, patchState }: StateContext<ViewTreeStateModel>, { object, directory }: GenerateHistory) {
        const state = getState();
        const index = state.history.indexOf(directory) + 1;
        const objects = object.filter(a => a.parent === directory);

        patchState({
            objects: this.objectSorting.sortObjects('name-asc', objects),
            history: state.history.slice(0, index),
        });
    }
}