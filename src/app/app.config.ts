import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideInitialize } from '@app/initialize';
import { FormlyZorroUIModule } from '@components/formly-zorro-ui/formly-zorro-ui.module';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideAnimations(),
        provideInitialize(),
        importProvidersFrom([FormlyZorroUIModule]),
    ],
};
