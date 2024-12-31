import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
    selector: 'formly-input',
    standalone: true,
    imports: [NzInputModule, ReactiveFormsModule, FormlyModule],
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class FormlyInputType extends FieldType<FieldTypeConfig> {}
