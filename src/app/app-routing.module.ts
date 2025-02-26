import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OurWorksComponent} from './components/our-works/our-works.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {UslugiComponent} from "./components/uslugi/uslugi.component";
import {UslugaComponent} from "./components/usluga/usluga.component";


const routes: Routes = [
  {path: 'our-works', component: OurWorksComponent},
  {path: '', component: MainPageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'uslugi', component: UslugiComponent},
  {path: 'uslugi/:id', component: UslugaComponent},
  {path: '**', redirectTo: 'error-404'},
  {path: 'error-404', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
