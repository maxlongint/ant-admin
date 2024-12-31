import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyZorroUIModule } from '@components/formly-zorro-ui/formly-zorro-ui.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
    selector: 'app-test',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, FormlyZorroUIModule, FormlyModule, NzButtonModule],
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
})
export default class TestComponent {
    form = new FormGroup({});
    model = { email: 'email@gmail.com' };
    fields: FormlyFieldConfig[] = [
        {
            key: 'email',
            type: 'input',
            props: {
                label: 'Email address',
                placeholder: 'Enter email',
                required: true,
            },
        },
    ];

    onSubmit(model: any) {
        console.log(model);
    }
}
