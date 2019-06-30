import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ProfileComponent } from "./profile.component";
import { EditProfileComponent } from "../edit_profile/edit-profile.component";

const routes: Routes = [
    { path: "default", component: ProfileComponent },
    { path: "lilpeen", component: EditProfileComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ProfileRoutingModule { }
