import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { MenuComponent } from './menu/menu.component';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [CommonModule, BannerComponent, MenuComponent],
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
