import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UtilProvider } from './services/util';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { environment } from 'src/environments/environment';
import { InterceptorModule } from './services/interceptor.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    InterceptorModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UtilProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  authToken = localStorage.getItem('auth_token');

  constructor (
    private http: HttpClient
  ) {

    if (this.authToken === null ) {
      this.http.post<any[]>(environment.URL_API+'api/' +  'authenticate', {'password': 'admin', 'rememberMe': true, 'username': 'admin'
      }).subscribe((token: any) => {
        localStorage.setItem('auth_token', token.id_token);
      });
    }

  }
}
