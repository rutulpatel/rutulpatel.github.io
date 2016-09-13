import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css']
})
export class ContactComponent implements OnInit {

    contactDataHeader: string = "Contact";
    email: string;
    overviewData: any[];

    constructor(private _appService: AppService) {
    }


    ngOnInit(): void {
        console.log('APP_INIT');
        this._appService.getData("overview")
                        .subscribe(data => {
                            this.overviewData = data[0];
                            this.email = this.overviewData["email"];
                            console.log(this.overviewData);
                        });
    }

}
