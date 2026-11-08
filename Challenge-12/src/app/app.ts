import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Trie } from './models/Tries';
import { products } from './products';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly trie = new Trie();
  protected readonly prefix = signal('');
  protected readonly topK = signal<number | null>(5);
  protected readonly results = computed(() => {
    const k = this.topK();
    if (k === null || !Number.isInteger(k) || k < 1) return null;
    return this.trie.searchTopK(this.prefix().trim().toLowerCase(), k);
  });

  constructor() {
    for (const [name, popularity] of products) {
      this.trie.insert(name, popularity);
    }
  }
}
