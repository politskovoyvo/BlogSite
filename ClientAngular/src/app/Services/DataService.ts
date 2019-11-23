import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from "@models/Post";
import { Item } from "@models/Item";

@Injectable()

export class DataService
{
  private url = 'https://localhost:44343/api/Repository';

  constructor (private http: HttpClient) { }

  public getItems ()
  {
      return this.http.get(this.url);
  }

  public GetAllPost (parentId:number)
  {
      return this.http.get(this.url+"/GetItemsForThisParent?="+parentId);
  }

  public CreateItem (item:Item)
  {
      return this.http.post(this.url, item);
  }

  public async FillFoldersArray (array : Item[] )
  {
    await this.getItems().toPromise().then((element:Item[]) =>
        element.forEach((i:Item) =>
            array.push(new Item( i.id, i.folderName,i.parent,i.status))));
  }

  public async GetItemsForSelectFolder (id: number, items:Post[])
  {
    await this.GetAllPost(id).toPromise().then((element:Post[]) =>
        element.forEach((c:Post) =>
            items.push(new Post(c.id, c.name, c.link, c.image, c.parentId))));
  }
}
