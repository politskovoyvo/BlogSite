import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { deserializeArray } from 'class-transformer';

import { Item } from '../Models/Item';
import { Observable } from 'rxjs';

@Injectable()

export class DataService 
{
    private _ulr = 'https://localhost:44343/api/Repository'; 
    
    constructor (private http: HttpClient) { }

    public getItems ()
    { 
        return this.http.get(this._ulr);
    }

    // public GetAllFoldersJson () : Observable<Item[]>
    // {
    //     return this.http.get<Item[]>(this._ulr).map((res: Response) => 
    //             res.json().response.map((item: Item) => 
    //                     new Item(item.id, item.folderName, item.parent, item.status)
    //                     .deserialize(item)));
    // }

    async allmodels()
    { 
        return await this.http.get(this._ulr)
            .toPromise()
            .then(model => 
            { 
                if(model){ 
                    return deserializeArray<Item>(Item, model.toString()); 
            } 
        }); 
    }
    
    public CreateItem (item:Item)
    {
        return this.http.post(this._ulr, item); 
    }
}