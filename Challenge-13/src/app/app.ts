import { Component } from '@angular/core';
import { GifSearch } from './components/gif-search/gif-search';

@Component({
  selector: 'app-root',
  imports: [GifSearch],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}