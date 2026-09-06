import { Routes } from '@angular/router';
import { LinkedListComponent } from './pages/linked-list/linked-list';
import { DoublyLinkedList } from './pages/doubly-linked-list/doubly-linked-list';

export const routes: Routes = [
    {path : 'linked-list', component: LinkedListComponent},
    {path : 'doubly-linked-list', component: DoublyLinkedList}
];
