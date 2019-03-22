import { Component } from '@angular/core';
import { angularJSModule } from 'src/app-angularjs/app.module';
import { downgradeComponent, UpgradeModule } from '@angular/upgrade/static';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nghybridapp';
}

// downgrading the component as an angular js directive
angularJSModule
  .directive(
    'appRootJs',
    downgradeComponent({
      component: AppComponent
    })
  );
