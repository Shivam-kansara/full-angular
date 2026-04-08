import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideHttpClient(),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyBYuNgdoyttz4rFCyD9bQ1dn6cc8CXuwks",
      authDomain: "my-form-f9d82.firebaseapp.com",
      projectId: "my-form-f9d82",
      storageBucket: "my-form-f9d82.appspot.com",
      messagingSenderId: "1036371646883",
      appId: "1:1036371646883:web:3864bf8bad10a8776a2216",
      measurementId: "G-L5LZN9V049"
    })),
    provideFirestore(() => getFirestore())

    
  ]
}; 