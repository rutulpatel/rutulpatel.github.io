import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide, PLATFORM_PIPES } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent, environment, AppService, ReverseFilterPipe } from './app/';
import { ContactComponent } from './app/contact';
import { EducationComponent } from './app/education';
import { ExperienceComponent } from './app/experience';
import { ProjectComponent } from './app/projects';
import { SkillsComponent } from './app/skills';
import { HomeComponent } from './app/home';

if (environment.production) {
  enableProdMode();
}



bootstrap(AppComponent, [ AppService, HTTP_PROVIDERS ]);
bootstrap(HomeComponent, [ AppService, HTTP_PROVIDERS ]);
bootstrap(ExperienceComponent, [ AppService, HTTP_PROVIDERS,
   provide(PLATFORM_PIPES, { 
     useValue: [ReverseFilterPipe], 
     multi: true
   }) 
]);
bootstrap(EducationComponent, [ AppService, HTTP_PROVIDERS,
   provide(PLATFORM_PIPES, { 
     useValue: [ReverseFilterPipe], 
     multi: true
   }) 
]);
bootstrap(ProjectComponent, [ AppService, HTTP_PROVIDERS,
   provide(PLATFORM_PIPES, { 
     useValue: [ReverseFilterPipe], 
     multi: true
   }) 
]);
bootstrap(SkillsComponent, [ AppService, HTTP_PROVIDERS ]);
bootstrap(ContactComponent, [ AppService, HTTP_PROVIDERS ]);