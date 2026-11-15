import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';

Injectable({
  providedIn: 'root',
})
export interface Gif{
  id: string;
  title: string;
  images : {
    fixed_height: {url : string};
  };
}

interface GiphySearchResponse{
  data: Gif[];
}

@Injectable({providedIn: 'root'})
export class GiphyService{
  gifs = signal<Gif[]>([]);
  cargando = signal(false);
  error = signal<string | null>(null);
  buscado = signal(false);
  private controller?: AbortController;

  async buscar(termino: string) {
  const q = termino.trim();
  if (!q) {
    this.controller?.abort();
    this.gifs.set([]);
    this.buscado.set(false);
    this.cargando.set(false);
    return;
  }

  // Cancela la petición anterior si sigue en curso
  this.controller?.abort();
  const controller = new AbortController();
  this.controller = controller;

  this.cargando.set(true);
  this.error.set(null);

  try {
    const params = new URLSearchParams({
      api_key: environment.giphyApiKey,
      q,
      limit: '25',
      offset: '0',
      rating: 'g',
      lang: 'en',
    });

    const res = await fetch(`${environment.giphyUrl}/search?${params}`, {
      signal: controller.signal,
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const json: GiphySearchResponse = await res.json();
    this.gifs.set(json.data);
    this.buscado.set(true);
  } catch (e: any) {
    if (e.name === 'AbortError') return; // cancelada a propósito
    this.error.set(e.message || 'Error desconocido');
  } finally {
    // Solo apaga el loading si esta sigue siendo la petición vigente
    if (this.controller === controller) {
      this.cargando.set(false);
    }
  }
}
}