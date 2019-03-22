import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeModule, setAngularJSGlobal, downgradeComponent, UpgradeComponent } from '@angular/upgrade/static'
import * as angular from 'angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './components/angular-component/angular-component.component';
import { UrlHandlingStrategy, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { angularJSModule } from 'src/app-angularjs/app.module';

// this url handling strategy tells the angular router which routes it should handle
export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) { return !url.toString().startsWith("/#"); }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

angularJSModule.
  component('myExample', {template: 'myExample AngularJs directive!'})

  @Directive({
    selector: 'my-example'
  })
  export class MyExampleDirective extends UpgradeComponent {
    constructor(elementRef: ElementRef, injector: Injector) {
      super('myExample', elementRef, injector);
    }  
  }

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    MyExampleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UpgradeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ],
  bootstrap: [AppComponent],
  entryComponents: [AngularComponent]
})

export class AppModule {
  constructor(
    public upgrade: UpgradeModule
  ) { }
}

// angularJSModule
// .directive(
//   'appRoot',
//   downgradeComponent({
//     component: AppComponent
//   })
// );

