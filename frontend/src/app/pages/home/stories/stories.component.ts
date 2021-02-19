import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ig-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  stories = [];

  constructor() { }

  ngOnInit(): void {
    this.test();
    console.log(this.stories);
  }

  test() {
    this.stories.push({
      userName: "pedrinho",
      imgs: [
        {
          dateInc: new Date,
          imgUrl: "https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg",
          seq: 1
        }
      ]
    },{
      userName: "joaozinho",
      imgs: [
        {
          dateInc: new Date,
          imgUrl: "https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg",
          seq: 1
        }
      ]
    })
  }

}
