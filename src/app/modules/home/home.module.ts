import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedeModule } from '../../shared/shared.module';

// Components
import { StoriesComponent } from './components/stories/stories.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    SharedeModule
  ],
  declarations: [
    HomePage,
    StoriesComponent
  ]
})
export class HomePageModule {}
