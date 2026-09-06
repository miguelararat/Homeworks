import { Component } from '@angular/core';
import { DoublyLinkedList as DoublyLinkedListModel } from '../../models/doubly-linked-list';

@Component({
  selector: 'app-doubly-linked-list',
  imports: [],
  templateUrl: './doubly-linked-list.html',
  styleUrl: './doubly-linked-list.css',
})
export class DoublyLinkedList {

  doublyLinkedList: DoublyLinkedListModel;
  current: any;

  constructor() {
    this.doublyLinkedList = new DoublyLinkedListModel();
    this.doublyLinkedList.append("www.github.com");
    this.doublyLinkedList.append("www.google.com");
    this.doublyLinkedList.append("www.stackoverflow.com");
    this.doublyLinkedList.append("www.youtube.com");
    this.doublyLinkedList.append("www.wikipedia.org");
    this.doublyLinkedList.append("www.reddit.com");
    this.doublyLinkedList.append("www.twitter.com");
    this.doublyLinkedList.append("www.instagram.com");
    this.doublyLinkedList.append("www.linkedin.com");
    this.doublyLinkedList.append("www.facebook.com");
    this.doublyLinkedList.append("www.netflix.com");
    this.current = this.doublyLinkedList.head;
  }

  get currentValue(): string {
    return this.current ? this.current.value : 'No hay reproducción';
  }
  
  goForward(): void {
    if (this.current && this.current.next) {
      this.current = this.current.next;
    }
  }

  goBack(): void {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
    }
  }
}
