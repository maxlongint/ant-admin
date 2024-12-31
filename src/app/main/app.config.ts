import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideInitialize } from './app.initialize';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideInitialize()],
};
