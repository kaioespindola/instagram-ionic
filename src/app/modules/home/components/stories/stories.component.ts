import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {

    slideOpts = {
        slidesPerView: 4.7,
        spaceBetween: 10,
        pagination: false,
        resistance: true,
        slidesOffsetAfter: 10,
        slidesOffsetBefore: 10
    };

  constructor() { }

  ngOnInit() {}

}
