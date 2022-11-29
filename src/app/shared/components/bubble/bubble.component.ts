import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss'],
})
export class BubbleComponent {

  @Input() isCurrentUser = false;
  @Input() userName: string;

  constructor() { }

}
