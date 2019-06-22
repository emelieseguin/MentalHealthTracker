import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { UpdateInfoRoutingModule } from "./update-info-routing.module";
import { UpdateInfoComponent } from "./update-info.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        UpdateInfoRoutingModule
    ],
    declarations: [
        UpdateInfoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class UpdateInfoModule { }
