import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as angular from 'angular';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { setAngularLib, setAngularJSGlobal } from '@angular/upgrade/static';
import { angularJSModule } from './app-angularjs/app.module';


import '../src/app-angularjs/sample/sample.ctrl';
import '../src/app-angularjs/app.config'
//setAngularJSGlobal(angular);
setAngularLib(angular);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // bootstrap angularJS 
  (<any>ref.instance).upgrade.bootstrap(document.body, [angularJSModule.name]);
})
.catch(err => console.log(err));

