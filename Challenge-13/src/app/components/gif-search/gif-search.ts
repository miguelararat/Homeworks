import { Component, inject } from '@angular/core';
import { GiphyService } from '../../services/giphy';
@Component({
  selector: 'app-gif-search',
  imports: [],
  templateUrl: './gif-search.html',
  styleUrl: './gif-search.scss',
})
export class GifSearch {
  giphy = inject(GiphyService);

  buscar(termino: string) {
    this.giphy.buscar(termino);
  }
}