import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  moduleId: module.id,
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css']
})

export class ProjectComponent implements OnInit{

    projectsData: any[];
    projectsDataHeader: string = "PROJECTS";
    
    constructor(private _appService: AppService) {
        
    }

    ngOnInit(): void {
        console.log('PROJECTS_INIT');
        this._appService.getData("projects")
                        .subscribe(data => {
                            this.projectsData = data;
                            console.log(this.projectsData);
                        });
    }

}