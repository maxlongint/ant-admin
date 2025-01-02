import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '@layout/layout.component';

@Component({
    selector: 'app-pages',
    standalone: true,
    imports: [RouterOutlet, LayoutComponent],
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss'],
})
export default class PagesComponent {}
