import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FriendsPage } from '../pages/friends/friends';
import { DesksPage } from '../pages/desks/desks';
import { TokensPage } from '../pages/tokens/tokens';
import { EditTokenPage } from '../pages/edit-token/edit-token';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

// firebase configs
import { firebase } from '../firebase/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// providers
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { TokenServiceProvider } from '../providers/token-service/token-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    FriendsPage,
    DesksPage,
    TokensPage,
    EditTokenPage,
    LoginPage,
    RegisterPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    FriendsPage,
    DesksPage,
    TokensPage,
    EditTokenPage,
    LoginPage,
    RegisterPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    TokenServiceProvider,
  ]
})
export class AppModule {}
