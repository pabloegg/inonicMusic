import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Song } from '../../models/songs/song.interface'
import { SONGS_LIST } from '../../mocks/songs/songs.mock'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  songs: Song[];

  constructor(public navCtrl: NavController) {
    this.songs=SONGS_LIST;
  }

}
