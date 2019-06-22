import { Component, OnInit } from "@angular/core";
import { isAndroid, Page } from "tns-core-modules/ui/page/page";

class PersonInfo {
    firstName: string;
    lastName: string;
    age?: number;
    sex?: string;
    email?: string;
    diagnoses?: string[];
    treatments?: string[];
}

const FakePerson: PersonInfo = {
    firstName: 'John',
    lastName: 'Smith',
    diagnoses: [
        'whatever',
        'stuff'
    ]
}

@Component({
    selector: "Profile",
    moduleId: module.id,
    templateUrl: "./profile.component.html"
})
export class ProfileComponent implements OnInit {
    currentUser: PersonInfo;


    constructor(private page: Page) {
        if (isAndroid) {
            this.page.actionBarHidden = true;
        }

        this.currentUser = FakePerson;
        //console.log(person.firstName); 
    }

    ngOnInit(): void { 
        // Use the "ngOnInit" handler to initialize data for the view.
    }
}
