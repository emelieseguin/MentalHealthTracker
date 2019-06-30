import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

//import { AppRoutingModule } from "../app-routing.module";
import { EditProfileComponent } from "./edit-profile.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        //AppRoutingModule,
    ],
    declarations: [
        EditProfileComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProfileModule { }
