import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldWrapper } from '@ngx-formly/core';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
    selector: 'formly-wrapper',
    standalone: true,
    imports: [ReactiveFormsModule, NzFormModule],
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss'],
})
export class FormlyFieldWrapper extends FieldWrapper {}
