import { Component } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  newmusics: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError!: string;

  constructor(private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe((data: any) => {

        console.log(data);
        this.newmusics = data;
        this.loading = false;

      },         ( errorServicio )=>{

        this.loading = false;
        this.error =true;
        console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.message;

      });
   }
}

