import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Item, Folder } from '../Models/Item';
import { Observable } from 'rxjs';



@Injectable()

export class DataService 
{
    private _ulr = 'https://localhost:44343/api/Repository'; 
    
    constructor (private http: HttpClient) {
        
    }

    public getItems () :Observable<Item[]>
    { 
        return this.http.get<Item[]>(this._ulr);
    }

    public CreateItem (item:Item)
    {
        return this.http.post(this._ulr, item); 
    }
}