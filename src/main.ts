import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; 
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; 

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes), // ✅ only this, no (routes)

    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyAZBBv62yCL_KFImKBAZTKX4jwZWxCtbDE",
      authDomain: "student-form-9079b.firebaseapp.com",
      projectId: "student-form-9079b",
      storageBucket: "student-form-9079b.firebasestorage.app",
      messagingSenderId: "432796659080",
      appId: "1:432796659080:web:4cf32745eb7633c3a01e3d",
      measurementId: "G-XXB4P65P75",
    })),
    provideFirestore(() => getFirestore())
  ]
});