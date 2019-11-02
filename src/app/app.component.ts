import {NestedTreeControl} from '@angular/cdk/tree';
import {NgModule, Component} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';

@NgModule({
  imports: [ NestedTreeControl, MatTreeNestedDataSource ],
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogSite';
}
