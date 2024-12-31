import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldWrapper } from './wrapper/wrapper.component';
import { FormlyInputType } from './input/input.component';

@NgModule({
    imports: [
        FormlyInputType,
        FormlyModule.forChild({
            wrappers: [
                {
                    name: 'formly-wrapper',
                    component: FormlyFieldWrapper,
                },
            ],
            types: [
                {
                    name: 'input',
                    component: FormlyInputType,
                    wrappers: ['formly-wrapper'],
                },
            ],
        }),
    ],
})
export class FormlyZorroUIModule {}
