import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { StoriesComponent } from './stories/stories.component';

@NgModule({
    imports:
        [CommonModule,
         BrowserModule,
         AppRoutingModule,
         CoreModule],
    declarations: [HomeComponent, StoriesComponent],
    exports: [HomeComponent]
})
export class HomeModule { }