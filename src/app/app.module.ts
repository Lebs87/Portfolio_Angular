import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { FooterComponent } from './footer/footer.component';
import { AccountantComponent } from './accountant/accountant.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    PresentationComponent,
    ProjectsComponent,
    SkillsComponent,
    CurriculumComponent,
    FooterComponent,
    AccountantComponent,
    SocialNetworksComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
