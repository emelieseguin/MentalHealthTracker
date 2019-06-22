import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { UpdateInfoComponent } from "./update-info.component";

const routes: Routes = [
    { path: "default", component: UpdateInfoComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class UpdateInfoRoutingModule { }
