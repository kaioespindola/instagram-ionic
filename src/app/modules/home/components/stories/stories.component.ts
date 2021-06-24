import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit {

    slideOpts = {
        slidesPerView: 4.5,
        spaceBetween: 16,
        pagination: false
    };

  constructor() { }

  ngOnInit() {}

}
