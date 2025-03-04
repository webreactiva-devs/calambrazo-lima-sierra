import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(), provideFirebaseApp(() =>
      initializeApp({
        "projectId":"ng-fayenza",
        "appId":"1:649324918271:web:28163f77b7b32c5457a3ca",
        "storageBucket":"ng-fayenza.appspot.com",
        "apiKey":"AIzaSyA5S_D2QYF2Bq05VEsyTi1IjT4FUg6xHWk",
        "authDomain":"ng-fayenza.firebaseapp.com",
        "messagingSenderId":"649324918271"
      })),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
  ]
};
