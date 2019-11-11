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
    
    public CreateItem (item:Item)
    {
        return this.http.post(this._ulr, item); 
    }
}