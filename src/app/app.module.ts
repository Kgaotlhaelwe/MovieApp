import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MovieServiceProvider } from '../providers/movie-service/movie-service';
import { HttpClientModule } from '@angular/common/http';
import { InfoPage} from '../pages/info/info';
import {CoverPage} from '../pages/cover/cover'
@NgModule({
  declarations: [
    MyApp,
    HomePage , InfoPage , CoverPage
  ],
  imports: [
    BrowserModule, HttpClientModule ,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage ,  InfoPage , CoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieServiceProvider
  ]
})
export class AppModule {}
