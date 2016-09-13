import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  moduleId: module.id,
  selector: 'app-education',
  templateUrl: 'education.component.html',
  styleUrls: ['education.component.css']
})

export class EducationComponent implements OnInit {
    eduData :any[];
    eduDataHeader : string = "Education";

    constructor(private _appService: AppService) {
        
    }

    ngOnInit(): void {
        console.log('EDU_INIT');
        this._appService.getData("education")
                        .subscribe(data => {
                            this.eduData = data;
                            console.log(this.eduData);
      });
        
    }
}