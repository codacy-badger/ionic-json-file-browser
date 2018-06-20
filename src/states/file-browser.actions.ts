import { Node } from './file-browser.model';

export class GenerateFileBrowser {
    static readonly type = '[Browser] Generate';

    constructor(public nodes: Node[], public node: number) {}
}

export class SortField {
    static readonly type = '[Field] Sort';

    constructor(public field: String) {}
}

export class GenerateHistory {
    static readonly type = '[Browser] History';

    constructor(public nodes: Node[], public node: number) {}
}

export class NodeSelect {
    static readonly type = '[Browser] Select';

    constructor(public node: Node) {}
}