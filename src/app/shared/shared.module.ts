import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { BubbleComponent } from './components/bubble/bubble.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    BubbleComponent
  ],
  declarations: [
    BubbleComponent
  ]
})
export class SharedeModule {}
