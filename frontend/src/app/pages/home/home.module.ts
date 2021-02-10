import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
    imports:
        [CommonModule,
         BrowserModule,
         CoreModule],
    declarations: [HomeComponent],
    exports: [HomeComponent]
})
export class HomeModule { }