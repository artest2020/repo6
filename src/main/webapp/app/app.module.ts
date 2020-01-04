import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Repo6SharedModule } from 'app/shared/shared.module';
import { Repo6CoreModule } from 'app/core/core.module';
import { Repo6AppRoutingModule } from './app-routing.module';
import { Repo6HomeModule } from './home/home.module';
import { Repo6EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Repo6SharedModule,
    Repo6CoreModule,
    Repo6HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Repo6EntityModule,
    Repo6AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class Repo6AppModule {}
