import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from 'src/shared/states/auth/auth.state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/auth/login/login.component';
import { SignupComponent } from './components/pages/auth/signup/signup.component';
import { GamesComponent } from './components/pages/games/games.component';
import { UserComponent } from './components/pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    GamesComponent,
    UserComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxsStoragePluginModule.forRoot({
      key: 'auth'
    }),
    NgxsModule.forRoot([AuthState]),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
