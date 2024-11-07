import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-protected-route',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './protected-route.component.html',
    styleUrl: './protected-route.component.scss',
})
export class ProtectedRouteComponent {}
