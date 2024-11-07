import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '',
    },
    {
        path: '',
        loadComponent: () => import('./routes/protected-route/protected-route.component').then((m) => m.ProtectedRouteComponent),
        children: [
            {
                path: 'pets',
                loadComponent: () => import('./routes/pet-list-route/pet-list-route.component').then((m) => m.PetListRouteComponent),
            },
            {
                path: 'pets/add',
                loadComponent: () => import('./routes/pet-add-route/pet-add-route.component').then((m) => m.PetAddRouteComponent),
            },
            {
                path: 'mood',
                loadComponent: () => import('./routes/mood-list-route/mood-list-route.component').then((m) => m.MoodListRouteComponent),
            },
            {
                path: 'mood/add',
                loadComponent: () => import('./routes/mood-add-route/mood-add-route.component').then((m) => m.MoodAddRouteComponent),
            },
        ],
    },
];
