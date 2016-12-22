/**
 * Created by hkh5f on 21.12.2016.
 */
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ContactComponent} from "./contact.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'contact', component: ContactComponent }
    ])],
    exports: [RouterModule]
})

export class ContactRoutingModule {}