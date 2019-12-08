import {ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2} from '@angular/core';
import { Post } from "@models/Post";
import {DataService} from "../../Services/DataService";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ContentComponent {

  repositoty:DataService;

  @Input() Posts :Post[] = [];
  @Input() ParentId :number;

  readonly maxSize :number = 390;

  constructor(repository: DataService) {
    this.repositoty = repository;
  }

  Onresize(evt:number, post:Post) {
    post.postSize = evt;
  }

  async OnAddPost() {
    let newPost = new Post(0, "new Post", "not link", "", this.ParentId);
    await this.repositoty.CreateItem(newPost);

    this.Posts.push(newPost);
  }

  async OnDeletePost(item:Post){
    await this.repositoty.OnDeleteItem(item.id);

    let deleteIndex:number = this.Posts.indexOf(item);
    this.Posts.splice(deleteIndex,1)
  }
}
