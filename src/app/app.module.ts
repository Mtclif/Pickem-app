import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { PicksComponent} from "./picks-component/picks.component"
import { PastPicksComponent } from './picks-component/past-picks/past-picks.component';
import { CurrentPicksComponent } from './picks-component/current-picks/current-picks.component';
import { LeaderboardComponent } from './picks-component/leaderboard/leaderboard.component';
import { TeamsComponentComponent } from './picks-component/teams-component/teams-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    PicksComponent,
    PastPicksComponent,
    CurrentPicksComponent,
    LeaderboardComponent,
    TeamsComponentComponent,
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule, 
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
