import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login.page';

import { LoginPageRoutingModule } from './login-routing.module';
import { SharedeModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    LoginPageRoutingModule,
    SharedeModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
