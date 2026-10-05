import { Component, Input } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item';
import { NodoMenu } from '../../models/Node';

@Component({
  selector: 'app-sidebar',
  imports: [MenuItem],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() raiz: NodoMenu | null = null;
}
