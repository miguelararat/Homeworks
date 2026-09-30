import { Component, Input } from '@angular/core';
import { NodoMenu } from '../../models/Node';

@Component({
  selector: 'app-menu-item',
  imports: [MenuItem],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.css',
})
export class MenuItem {
  @Input() nodo: NodoMenu | null = null;
}
