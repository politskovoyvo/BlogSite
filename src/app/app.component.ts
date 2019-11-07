import {NestedTreeControl} from '@angular/cdk/tree';
import {NgModule, Component, OnInit, Input} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';

import { DataService } from '../app/Services/DataService'
import { Item } from '@models/Item';

@NgModule({
  imports: [ NestedTreeControl, MatTreeNestedDataSource , 
             DataService, Input],
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit {

    _items:Item []; 

    constructor(private _dataService:DataService) { 
    }

    ngOnInit() 
    {
      this.GetItems();
    }

    private GetItems (){

      var i = this._dataService.getItems();

      this._dataService.getItems().subscribe( (items:Item[]) =>  
      {
        this._items = items; 
      }
      ); 
    }
}
