import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { Song } from '../../models/songs/song.interface'
// import { SONGS_LIST } from '../../mocks/songs/songs.mock'
import { SongProvider } from '../../providers/songs/songs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  song: Song[];

  constructor(private songService: SongProvider){
    this.songService.getSongs()
    .subscribe((data:Song[])=>{
      this.song=data;
      // this.toast.show("songs load");
    })
  }

}
