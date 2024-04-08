import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { LoginComponent } from './app-modules/auth/login/login.component';
import { SharedModule } from './shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';
import { EnvService } from './services/env.service';
import { authInterceptor } from './interceptors/auth.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpErrorHandlerInterceptor } from './interceptors/http-error-handler.interceptor';


const initializeAppFactory = (primeConfig: PrimeNGConfig, env: EnvService) => async () => {
  // ......
  primeConfig.ripple = true;
  await env.loadAppConfig();
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    InputTextModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [PrimeNGConfig, EnvService],
      multi: true,
    },
      provideHttpClient(withInterceptors([authInterceptor,httpErrorHandlerInterceptor])),
      MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
