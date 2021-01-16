import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { EnvServiceProvider } from './env.service.provider';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UnknownObjectCardComponent } from './unknown-object-card/unknown-object-card.component';
import { UnknownObjectListComponent } from './unknown-object-list/unknown-object-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BackendLinksComponent } from './backend-links/backend-links.component';
import { Routes, RouterModule, RoutesRecognized } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: UnknownObjectListComponent},
  {path: 'backend', component: BackendLinksComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UnknownObjectCardComponent,
    UnknownObjectListComponent,
    BackendLinksComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
