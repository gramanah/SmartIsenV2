import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SmartIsenProjectRoomModule } from './room/room.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        SmartIsenProjectRoomModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SmartIsenProjectEntityModule {}
