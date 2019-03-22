import { angularJSModule } from "./app.module";
import * as angular from "angular";

angularJSModule.config(['$locationProvider', '$routeProvider',
  function config($locationProvider: angular.ILocationProvider,
    $routeProvider: angular.route.IRouteProvider) {

    $locationProvider.hashPrefix('');

    $routeProvider.
      when('/ng1-route', {
        template: require("../../src/app-angularjs/sample/sample.html"),
        controller: "sampleController"
      })
      .otherwise({ template: '' });
  }
]);
