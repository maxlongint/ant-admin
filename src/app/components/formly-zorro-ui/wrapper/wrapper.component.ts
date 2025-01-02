import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldWrapper, FormlyModule } from '@ngx-formly/core';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
    selector: 'formly-wrapper',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, NzFormModule, FormlyModule],
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss'],
})
export class FormlyFieldWrapper extends FieldWrapper {
    get errorState() {
        return this.showError ? 'error' : '';
    }
}
