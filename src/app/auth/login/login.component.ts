import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppSetting } from 'src/app/app.initialize';
import { DebounceTime } from '@sleeko/utils/decorators';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, NzIconModule, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
    readonly appName = AppSetting.appName;

    readonly loginForm = new FormGroup({
        account: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),
    });
    @ViewChild('submitElement') readonly submitElement!: ElementRef<HTMLButtonElement>;
    loading = false;

    @DebounceTime()
    submit() {
        this.loading = true;
        if (this.loginForm.valid) {
            const data = this.loginForm.getRawValue();
        }
    }
}
