import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    login(data: { account: string | null; password: string | null }) {}
}
