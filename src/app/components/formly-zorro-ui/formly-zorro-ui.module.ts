import { NgModule } from '@angular/core';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldWrapper } from './wrapper/wrapper.component';
import { FormlyInputType } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';

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
            validationMessages: [
                {
                    name: 'required',
                    message: (_error: boolean, field: FormlyFieldConfig) => {
                        return `${field.props?.label ?? '此字段'}是必填项`;
                    },
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
    exports: [FormlyModule, ReactiveFormsModule, NzFormModule],
})
export class FormlyZorroUIModule {}
