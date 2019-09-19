import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatalogComponent} from './components/catalog/catalog.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {MainPageComponent} from './components/main-page/main-page.component';


const routes: Routes = [
  {path: 'service', component: CatalogComponent},
  {path: '', component: MainPageComponent},
  {path: 'about-us', component: AboutUsComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
