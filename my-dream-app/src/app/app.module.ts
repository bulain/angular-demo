import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { AddrComponent } from './addr/addr.component';
import { AreaComponent } from './area/area.component';

export const ROUTES: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user/:username', component: UserComponent },
  { path: 'addr', component: AddrComponent },
  { path: 'area', component: AreaComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    IndexComponent,
    AddrComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
