import { Object } from './tree-view.model';

export class GenerateTree {
    static readonly type = '[Tree] Generate';

    constructor(public object: Object[], public directory: string) {}
}

export class SortTree {
    static readonly type = '[Tree] Sort';

    constructor(public field: String) {}
}

export class GenerateHistory {
    static readonly type = '[Tree] History';

    constructor(public object: Object[], public directory: string) {}
}