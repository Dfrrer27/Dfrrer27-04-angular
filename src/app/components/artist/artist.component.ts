import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/service/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent{

  artista: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;

  constructor( private router: ActivatedRoute, private spotify: SpotifyService ) { 
    this.loadingArtist = true;

    this.router.params.subscribe(params => {
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
    })}

  getArtista( id:string ){
    this.loadingArtist = true;

    this.spotify.getArtista(id).subscribe( artista => {console.log(artista);
    this.artista = artista;
    this.loadingArtist = false;
  })}

  getTopTracks( id: string ){
    this.spotify.getTopTracks(id).subscribe( TopTracks => {console.log(TopTracks);
    this.topTracks = TopTracks;  
  })}

}
