/**
 * Created by hkh5f on 22.12.2016.
 */
import { NgModule }            from '@angular/core';

import { SharedModule }        from '../shared/shared.module';

import { HeroComponent }       from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent }   from './hero-list.component';
import { HeroRoutingModule }   from './hero-routing.module';

@NgModule({
    imports: [ SharedModule, HeroRoutingModule ],
    declarations: [
        HeroComponent, HeroDetailComponent, HeroListComponent,
    ]
})
export class HeroModule { }