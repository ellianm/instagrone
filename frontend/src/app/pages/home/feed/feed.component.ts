import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'ig-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts = []
  constructor() { }

  ngOnInit(): void {
    this.test();
  }

  test() {
    this.posts.push({});
    this.posts.push({});
  }

}
