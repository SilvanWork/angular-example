/**
 * Created by hkh5f on 21.12.2016.
 */
import {Directive, ElementRef} from "@angular/core";

@Directive({ selector: '[highlight]' })

/** Highlight the attached element in gold */
export class HighlightDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'gold';
        console.log(
            `* AppRoot highlight called for ${el.nativeElement.tagName}`
        );
    }
}