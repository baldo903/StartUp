import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesComponent } from './services/services.component';




@NgModule({
  imports: [
  ],
  declarations: [
    HomePageComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicesComponent,
  ],
})
export class PagesModule { }