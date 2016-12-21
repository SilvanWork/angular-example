/**
 * Created by hkh5f on 21.12.2016.
 */
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {HighlightDirective} from "./highlight.directive";
import {TitleComponent} from "./title.component";
import {UserService} from "./user.service";
import {FormsModule} from "@angular/forms";
import {AwesomePipe} from "./contact/awesome.pipe";
import {ContactComponent} from "./contact/contact.component";
import {
    HighlightDirective as ContactHighlightDirective
} from './contact/highlight.directive';
import {ContactService} from "./contact/contact.service";

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [
        AppComponent,
        HighlightDirective,
        TitleComponent,

        AwesomePipe,
        ContactComponent,
        ContactHighlightDirective
    ],
    bootstrap:    [ AppComponent ],
    providers: [ UserService, ContactService ]
})

export class AppModule { }