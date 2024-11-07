import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { MatMomentDateModule, provideMomentDateAdapter } from '@angular/material-moment-adapter';

export const appConfig: ApplicationConfig = {
    providers: [
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'outline',
                floatLabel: 'always',
                subscriptSizing: 'dynamic',
            },
        },
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideAnimationsAsync(),
        provideFirebaseApp(() =>
            initializeApp({
                projectId: 'ng-to-firebase-host-example',
                appId: '1:845087366098:web:2bf0c47663cb3ade13860b',
                storageBucket: 'ng-to-firebase-host-example.firebasestorage.app',
                apiKey: 'AIzaSyA2nOxkkX5o1dyGqWw6a_SxVv1ESON_180',
                authDomain: 'ng-to-firebase-host-example.firebaseapp.com',
                messagingSenderId: '845087366098',
                measurementId: 'G-MWFYHY6VP0',
            })
        ),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideDatabase(() => getDatabase()),
        provideMomentDateAdapter(undefined, { useUtc: true }),
        importProvidersFrom(MatMomentDateModule),
    ],
};
