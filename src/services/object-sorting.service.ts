import { Injectable } from '@angular/core';
import { Object } from '../states/tree-view.model';

@Injectable({
  providedIn: 'root',
})

export class ObjectSortingService {
    private objects: Object[];

    constructor() {}

    compareNamesAsc(a, b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    }

    compareNamesDesc(a, b) {
        if (a.name < b.name)
            return 1;
        if (a.name > b.name)
            return -1;
        return 0;
    }

    sortObjects(field, array) {
        this.objects = array;

        switch (field) {
            case 'name-asc': {
                this.objects.sort(this.compareNamesAsc);
                break;
            }
            case 'name-desc': {
                this.objects.sort(this.compareNamesDesc);
                break;
            }
            case 'type':
            case 'size':
            default: {
                this.objects.sort(this.compareNamesAsc);
                break;
            }
        }

        return this.objects;
    }
}