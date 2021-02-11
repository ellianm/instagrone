//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StartBarComponent } from './utils/start-bar/start-bar.component';
import { CommonModule } from '@angular/common';
//Material
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
    imports:
        [
            CommonModule,
            AppRoutingModule,
            BrowserModule,
            MatIconModule
        ],
    declarations: [StartBarComponent],
    exports: [StartBarComponent],
    providers: []
})
export class CoreModule { }