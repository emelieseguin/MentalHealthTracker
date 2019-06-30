import { Component, OnInit, ComponentFactoryResolver } from "@angular/core";
import { isAndroid, Page, EventData } from "tns-core-modules/ui/page/page";
import { RouterExtensions } from "nativescript-angular/router";


class PersonInfo {
    firstName: string;
    lastName: string;
    age: number;
    sex: string;
    email: string;
    diagnoses: string[];
    treatments: string[];
}

const FakePerson: PersonInfo = {
    firstName: 'John',
    lastName: 'Smith',
    age: 31,
    sex: 'Male',
    email: 'john.smith@email.com',
    diagnoses: [
        'Generalized Anxiety Disorder (GAD)',
        'Seasonal Affective Disorder (SAD)'
    ],
    treatments: [
        'Mindfulness Meditation',
        'Counselling'
    ]
}

@Component({
    selector: "Profile",
    moduleId: module.id,
    templateUrl: "./profile.component.html",
    styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
    currentUser: PersonInfo;


    constructor(private page: Page, private routerExtensions: RouterExtensions) {
        if (isAndroid) {
            this.page.actionBarHidden = true;
        }

        this.currentUser = FakePerson;
        //console.log(person.firstName); 
    }

    ngOnInit(): void { 
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    onTap() {
        //let button = <Button>args.object;
        console.log('here');
        this.routerExtensions.navigateByUrl("lilpeen"); 
        
    }
}
