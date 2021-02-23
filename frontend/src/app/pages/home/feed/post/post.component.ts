import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'ig-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post;

  constructor(private PostService : PostService) { }

  ngOnInit(): void {
    this.PostService.findAll()
  }

}
