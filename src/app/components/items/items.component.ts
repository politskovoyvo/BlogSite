import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

import { Item } from '@models/Item';
import { DataService } from '@models/../Services/DataService'

export class TreeItems {
  _item: Item;
  name:string; 
  _children?: TreeItems [] = new Array; 

  constructor (item:Item) {
    this._item = item; 
    this.name = item.folderName;
  }
}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  
  providers: [DataService]
})

export class ItemsComponent {

  @Input()
  Array1 :Item[] = new Array;

  treeControl = new NestedTreeControl<TreeItems>(node => node._children);
  dataSource = new MatTreeNestedDataSource<TreeItems>();

  threeArrayItems : TreeItems[]  = new Array(); 
  
  constructor(private _dataService:DataService) {

    this._dataService.getItems().subscribe( (items:Item[]) =>  
    {
      this.Array1 = items; 
    }
    );

    this.AddParentItems(this.Array1);
    this.dataSource.data = this.threeArrayItems;
  }
  
  AddParentItems (list:Item[]){
    list.forEach(i => 
    {
      if (i.parent == 0)
      { 
        let item:Item = new Item (i.id, i.folderName, i.parent);

        let treeItem:TreeItems = new TreeItems(item);
        this.threeArrayItems.push(treeItem); 
      }  
    });

    this.addItems(this.threeArrayItems); 
  }

  addItems (list:TreeItems[])
  {
    list.forEach (i =>  
    {
      this.Array1.forEach (c => {

        if (i._item.id == c.parent)
        {
          i._children.push(new TreeItems(c));
        }
      });

      if (i._children.length>0)
        {
          this.addItems(i._children); 
        }
    });
  }

  hasChild = (_: number, node: TreeItems) => !!node._children && node._children.length > 0;
}