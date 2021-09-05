import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

// Components
import { BubbleComponent } from './components/bubble/bubble.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  imports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    BubbleComponent,
    PostComponent
  ],
  declarations: [
    BubbleComponent,
    PostComponent
  ]
})
export class SharedeModule {}
