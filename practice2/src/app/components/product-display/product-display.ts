import { Component, Input } from '@angular/core';
import { DoublyNode } from '../../../models/doubly-node';

@Component({
  selector: 'app-product-display',
  imports: [],
  templateUrl: './product-display.html',
  styleUrl: './product-display.css',
})
export class ProductDisplay 
{
  @Input() producto: DoublyNode | null = null;
}
