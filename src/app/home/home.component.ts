import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";
import { isAndroid, Page } from "tns-core-modules/ui/page/page";
import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
registerElement('CardView', () => CardView);

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    items: Array<IDataItem>;

    constructor(private _itemService: DataService, private page: Page) { 
        if (isAndroid) {
            this.page.actionBarHidden = true;
        }
    }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
        
    }
}
