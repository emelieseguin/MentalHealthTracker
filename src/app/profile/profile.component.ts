import { Component, OnInit } from "@angular/core";
import { isAndroid, Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "Profile",
    moduleId: module.id,
    templateUrl: "./profile.component.html"
})
export class ProfileComponent implements OnInit {
    
    constructor(private page: Page) {
        if (isAndroid) {
            this.page.actionBarHidden = true;
        }
    }

    ngOnInit(): void { 
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
