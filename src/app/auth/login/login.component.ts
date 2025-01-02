import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DebounceTime } from '@sleeko/utils/decorators';
import { AppSetting } from '@app/initialize';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

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
    loading = false;
    service = inject(LoginService);
    router = inject(Router);

    @DebounceTime()
    submit() {
        this.loading = true;
        if (this.loginForm.valid) {
            const data = this.loginForm.getRawValue();
            // this.service.login(data);
            this.router.navigateByUrl('/pages/home');
        }
    }
}
