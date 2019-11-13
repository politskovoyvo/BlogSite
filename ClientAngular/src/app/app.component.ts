import {NestedTreeControl} from '@angular/cdk/tree';
import { NgModule, Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { DataService } from '@models/../Services/DataService';


@NgModule({
  imports: [ NestedTreeControl, MatTreeNestedDataSource ]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})

export class AppComponent implements OnInit {
   
    constructor() 
    {

    }

    ngOnInit() { }
}
