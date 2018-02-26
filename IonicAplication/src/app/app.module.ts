import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PlayerPage } from '../pages/player/player';
import { RegisterPage } from '../pages/register/register';
import { MagePage } from '../pages/mage/mage';
import { VampirePage } from '../pages/vampire/vampire';

// firebase configs
import { AngularFireModule } from 'angularfire2';
import { firebase } from '../firebase/firebase';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PlayerPage,
    RegisterPage,
    MagePage, // this page gonna be the token (gonna be improved)
    VampirePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PlayerPage,
    RegisterPage,
    MagePage,
    VampirePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
