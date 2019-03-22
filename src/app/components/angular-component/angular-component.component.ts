import { Component, OnInit } from '@angular/core';
import { angularJSModule } from 'src/app-angularjs/app.module';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
  selector: 'app-angular-component',
  templateUrl: './angular-component.component.html',
  styleUrls: ['./angular-component.component.css']
})

export class AngularComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// downgrading the component as an angular js directive
angularJSModule
  .directive(
    'angularComponent',
    downgradeComponent({
      component: AngularComponent
    })
  );

