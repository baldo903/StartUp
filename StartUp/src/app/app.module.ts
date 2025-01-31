import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CommonModule      
  ],
  declarations: [
    AppComponent,
    PagesModule,
    ComponentsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }