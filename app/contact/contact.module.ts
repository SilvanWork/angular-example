/**
 * Created by hkh5f on 21.12.2016.
 */
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ContactComponent} from "./contact.component";
import {HighlightDirective} from "../shared/highlight.directive";
import {AwesomePipe} from "../shared/awesome.pipe";
import {ContactService} from "./contact.service";
import {NgModule} from "@angular/core";
import {ContactRoutingModule} from "./contact-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports:      [ SharedModule, ContactRoutingModule ],
    declarations: [ ContactComponent ],
    providers:    [ ContactService ]
})
export class ContactModule { }