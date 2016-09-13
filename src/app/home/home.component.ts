import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css', './../../css/bootstrap.min.css' ]
})
export class HomeComponent {
    firstName: string;
    lastName: string;
    tagLine: string;
    overviewData: any[];

    constructor(private _appService: AppService) {
    }

    ngOnInit(): void {
        console.log('HOME_INIT');
        this._appService.getData("overview")
                        .subscribe(data => {
                            this.overviewData = data[0];
                            this.firstName = this.overviewData["firstName"];
                            this.lastName = this.overviewData["lastName"];
                            this.tagLine = this.overviewData["tagLine"];
                            console.log(this.overviewData);
                        });
    }

}
