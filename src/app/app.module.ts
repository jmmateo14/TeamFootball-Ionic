import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TeamsPage } from '../pages/teams/teams';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TeamsProvider } from '../providers/teams/teams';
import { HttpClientModule } from '@angular/common/http';
import { ListPage } from '../pages/list/list';
import { NewTeamPage } from '../pages/new-team/new-team';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    TeamsPage,
    ListPage,
    NewTeamPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    TeamsPage,
    ListPage,
    NewTeamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TeamsProvider
  ]
})
export class AppModule {}
