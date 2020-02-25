import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input() isLiked: boolean;
  @Input() numberOfLikes = 0;
  @Output() change = new EventEmitter();


  constructor() { }

  onClick() {
    this.numberOfLikes += (this.isLiked) ? -1: 1;
    this.isLiked = !this.isLiked;
    this.change.emit(this.isLiked);
  }



}
