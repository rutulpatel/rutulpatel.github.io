import { OnInit, Component } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  moduleId: module.id,
  selector: 'app-experience',
  templateUrl: 'experience.component.html',
  styleUrls: ['experience.component.css']
})
export class ExperienceComponent implements OnInit{
    
    expData: any[];
    expDataHeader: string = "Experience";

    constructor(private _appService: AppService){
        
    }
    ngOnInit(): void {
        console.log('EXP_INIT');
        this._appService.getData('experience')
                        .subscribe(data => {
                            this.expData = data;
                            console.log(this.expData);
                        });
    }
}