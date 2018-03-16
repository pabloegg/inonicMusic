import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Song } from '../../models/songs/song.interface';
import { Platform } from 'ionic-angular';


declare let Media:any;

@IonicPage()
@Component({
  selector: 'page-playview',
  templateUrl: 'playview.html',
})

export class PlayviewPage {

  media:any;
  song:Song;
  status:string="play";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform
    ) {
      platform.ready().then(() => {    
        this.platform.pause.subscribe(() => {
          this.media.pause();
          this.status="play";
        });

        this.platform.resume.subscribe(() => {
        });
    });
    }

  ionViewWillLoad(){
    this.song=this.navParams.get('song');
  }

  ionViewWillLeave(){
    this.media.stop();
  }

  playSong(){
    if(!this.media)
    this.loadSong(this.song.preview_url);

    if(this.status=="play")
    {
      this.media.play();
      this.status="pause";
    }
    else
    {
      this.media.pause();
      this.status="play";
    }

    
  }

  loadSong(url: string){
    this.media = new Media(url);
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayviewPage');
  }

}
