import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from "@models/Post";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ContentComponent {

  @Input() Posts: Post[] = [];

  constructor() { }
}
