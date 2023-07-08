import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompoundsComponent } from './components/compounds/compounds.component';
import { CompoundComponent } from './components/compound/compound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AddCompoundComponent } from './pages/add-compound/add-compound.component';
import { CompoundDetailComponent } from './pages/compound-detail/compound-detail.component';
import { MessageComponent } from './components/message/message.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, CompoundsComponent, CompoundComponent, NavbarComponent, HomeComponent, AddCompoundComponent, CompoundDetailComponent, MessageComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
