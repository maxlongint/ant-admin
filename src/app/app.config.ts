import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideInitialize } from '@app/initialize';
import { FormlyZorroUIModule } from '@components/formly-zorro-ui/formly-zorro-ui.module';

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), provideInitialize(), importProvidersFrom([FormlyZorroUIModule])],
};
