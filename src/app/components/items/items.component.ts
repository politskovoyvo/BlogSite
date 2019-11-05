import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface ItemsNode {
  name: string;
  children?: ItemsNode[];
}

export class Item 
{
  _id:number;
  _name: string;
  _parentId:number;

  constructor (id:number, name:string, parentId:number)
  {
    this._id = id;
    this._name = name;
    this._parentId = parentId; 
  } 
}

export class TreeItems {
  _item: Item;
  name:string; 
  _children?: TreeItems [] = new Array; 

  constructor (item:Item) {
    this._item = item; 
    this.name = item._name;
  }
}

const Array1 :Item[] = [
  {
    _id: 1, _name: "Патерны", _parentId: 0
  },
  {
    _id: 2, _name: "ASP MVC Core", _parentId: 0
  },
  {
    _id: 3, _name: "Декоратор", _parentId: 1
  },
  {
    _id: 4, _name: "Навигация", _parentId: 2
  },
  {
    _id: 5, _name: "Контроллеры", _parentId: 2
  },
  {
    _id: 6, _name: "SingleTon", _parentId: 4
  },
  {
    _id: 7, _name: "SingleTon", _parentId: 4
  },
  {
    _id: 8, _name: "SingleTon", _parentId: 4
  },
  {
    _id: 9, _name: "SingleTon", _parentId: 4
  },
  {
    _id: 10, _name: "SingleTon", _parentId: 5
  },
]

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent {

  treeControl = new NestedTreeControl<TreeItems>(node => node._children);
  dataSource = new MatTreeNestedDataSource<TreeItems>();

  _listItems: ItemsNode []; 
  threeArrayItems : TreeItems[]  = new Array(); 
  
  constructor() {
    this.AddParentItems(Array1);
    this.dataSource.data = this.threeArrayItems;
  }
  
  AddParentItems (list:Item[]){
    list.forEach(i => 
    {
      if (i._parentId == 0)
      { 
        let item:Item = new Item (i._id, i._name, i._parentId);

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
      Array1.forEach (c => {

        if (i._item._id == c._parentId)
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