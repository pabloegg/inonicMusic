import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayviewPage } from './playview';

@NgModule({
  declarations: [
    PlayviewPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayviewPage),
  ],
})
export class PlayviewPageModule {}
