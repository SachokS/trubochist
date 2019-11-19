import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {OurWorksComponent} from './components/our-works/our-works.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {OurServicesComponent} from './components/our-services/our-services.component';
import {MetrikaModule} from "ng-yandex-metrika";
import {MatDialogModule} from '@angular/material/dialog';
import { PhotoDialogComponent } from './components/photo-dialog/photo-dialog.component';
import { UslugiComponent } from './components/uslugi/uslugi.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    OurWorksComponent,
    MainPageComponent,
    PageNotFoundComponent,
    OurServicesComponent,
    PhotoDialogComponent,
    UslugiComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    HttpClientModule,
    MetrikaModule.forRoot(
      {id: 55935106, webvisor: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PhotoDialogComponent]
})
export class AppModule {
}
