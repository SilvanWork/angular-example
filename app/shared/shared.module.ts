/**
 * Created by hkh5f on 22.12.2016.
 */
import {NgModule} from "@angular/core";
import {AwesomePipe} from "./awesome.pipe";
import {HighlightDirective} from "./highlight.directive";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports:        [ CommonModule ],
    declarations:   [ AwesomePipe, HighlightDirective ],
    exports:        [ AwesomePipe, HighlightDirective,
                        CommonModule, FormsModule ]
})

export class SharedModule { }