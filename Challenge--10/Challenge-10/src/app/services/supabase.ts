import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  private readonly url = environment.supabaseUrl.trim();
  private readonly apiKey = environment.supabaseKey.trim();

  readonly cliente: SupabaseClient = this.createClient();

  private createClient(): SupabaseClient {
    if (!this.url || !this.apiKey) {
      throw new Error('Falta configurar la URL o la clave pública de Supabase.');
    }

    return createClient(this.url, this.apiKey, {
      global: {
        headers: {
          apikey: this.apiKey,
        },
      },
    });
  }
}
