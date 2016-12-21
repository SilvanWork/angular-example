/**
 * Created by hkh5f on 21.12.2016.
 */
import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: '<h1>{{title}}</h1>',
})

export class AppComponent {
    title = 'Minimal NgModule';
}