import { NgModule, Component, OnInit } from '@angular/core';
import { DataService } from '@models/../Services/DataService';
import {Post} from "@models/Post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit {

  _repository: DataService;

  loading:boolean= false;
  public ParentId: number;
  CorrectItems:Post[]=new Array<Post>();

  constructor(repository: DataService) {
    this._repository = repository;
  }

    ngOnInit() { }

  GetCorrectItems(id: number)
  {
    this.loading = true;

    //Test
    setInterval(()=> console.log("ожидание"),  1500);

    this.CorrectItems = [];
    this._repository.GetItemsForSelectFolder(id, this.CorrectItems).then(r => r);
    console.log(this.CorrectItems);

    this.loading = false;
  }
}
