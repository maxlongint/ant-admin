import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '@main/app.component';
import { appConfig } from '@main/app.config';

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
