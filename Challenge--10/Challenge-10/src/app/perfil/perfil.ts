import { Component } from '@angular/core';
import { inject, signal } from '@angular/core';
import { Supabase } from '../services/supabase';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  imports: [FormsModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {

    private sb = inject(Supabase).cliente;
    url = signal('');

    async subir(e: Event) {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file) return;

        const { data: { user } } = await this.sb.auth.getUser();

        const ruta = `${user!.id}/${Date.now()}-${file.name}`;

        const { error } = await this.sb.storage.from('avatars')
        .upload(ruta, file, { upsert: true });

        if (error)
            return alert(error.message);

        this.url.set(this.sb.storage.from('avatars')
        .getPublicUrl(ruta).data.publicUrl);
    }
}
