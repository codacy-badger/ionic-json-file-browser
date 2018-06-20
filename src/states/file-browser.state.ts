import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
    Node,
} from './file-browser.model';
import { 
    GenerateFileBrowser,
    SortField,
    GenerateHistory,
    NodeSelect,
} from './file-browser.actions';
import { ListSortingService } from '../services/list-sorting.service';

export interface FileBrowserStateModel {
    nodes: Node[];
    history: Node[];
    nodeSelected: Node;
}

@State<FileBrowserStateModel>({
    name: 'nodes',
    defaults : {
        nodes: [],
        history: [],
        nodeSelected: <Node>{},
    },
})

export class FileBrowserState {
    constructor(private listSorting: ListSortingService) {}

    @Selector()
    static getNodes(state: FileBrowserStateModel) {
        return state.nodes;
    }

    @Selector()
    static getHistory(state: FileBrowserStateModel) {
        return state.history;
    }

    @Selector()
    static getNodeSelected(state: FileBrowserStateModel) {
        console.log('here');
        return state.nodeSelected;
    }

    @Action(GenerateFileBrowser)
    generateFileBrowser({ getState, patchState }: StateContext<FileBrowserStateModel>, { nodes, node }: GenerateFileBrowser) {
        const state = getState();
        const childNodes = nodes.filter(a => a.parent === node);
        const currentNode = nodes.filter(a => a.id === node)[0];

        patchState({
            nodes: this.listSorting.sortNodes('name-asc', childNodes),
            history: [...state.history, currentNode],
        });
    }

    // @Action(SortField) 
    // sortField({ getState, patchState }: StateContext<FileBrowserStateModel>, { field }: SortField) {
    //     const state = getState();

    //     patchState({
    //          nodes: this.objectSorting.sortObjects(field, state.nodes),
    //     });
    // }

    @Action(GenerateHistory)
    generateHistory({ getState, patchState }: StateContext<FileBrowserStateModel>, { nodes, node }: GenerateHistory) {
        const state = getState();
        const currentNode = state.history.find(a => a.id === node);
        const index = state.history.indexOf(currentNode) + 1;

        const childNodes = nodes.filter(a => a.parent === node);

        patchState({
            nodes: this.listSorting.sortNodes('name-asc', childNodes),
            history: state.history.slice(0, index),
        });
    }

    // @Action(NodeSelect)
    // nodeSelect({ getState, patchState }: StateContext<FileBrowserStateModel>, { node }: NodeSelect) {
    //     const state = getState();

    //     patchState({
    //         ...state,
    //         nodeSelected: node,
    //     });
    // }
}