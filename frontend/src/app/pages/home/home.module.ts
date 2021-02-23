import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { StoriesComponent } from './stories/stories.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './feed/post/post.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports:
        [CommonModule,
         BrowserModule,
         AppRoutingModule,
         CoreModule,
         HttpClientModule],
    declarations: [HomeComponent, StoriesComponent, FeedComponent, PostComponent],
    exports: [HomeComponent]
})
export class HomeModule { }