import {NestedTreeControl} from '@angular/cdk/tree';
import {NgModule, Component, OnInit} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';

import { DataService } from '../app/Services/DataService';
import { Item } from '@models/Item'; 

@NgModule({
  imports: [ NestedTreeControl, MatTreeNestedDataSource , 
             DataService],
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit {
   
    _items : Item [] = new Array; 

    constructor(private _dataService:DataService) { 
    }

    ngOnInit() 
    {
      this.GetItems();
    }

    private GetItems (){

      this._dataService.getItems().subscribe((items:Item[]) =>  
      {
       items.forEach(c =>  
        { 
          let folder : Item = new Item (c.id, c.folderName, c.parent, c.status) ; 

          this._items.push(folder); 
        }); 
      }
      ); 
    }
}
