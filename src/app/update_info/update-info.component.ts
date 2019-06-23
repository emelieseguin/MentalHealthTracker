import { Component, OnInit } from "@angular/core";
import { Page, isAndroid } from "tns-core-modules/ui/page/page";

@Component({
    selector: "update-info",
    moduleId: module.id,
    templateUrl: "./update-info.component.html",
    styleUrls: ["./update-info.component.css"]
})
export class UpdateInfoComponent implements OnInit {
    
    constructor(private page: Page) {
        if (isAndroid) {
            this.page.actionBarHidden = true;
        }
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
