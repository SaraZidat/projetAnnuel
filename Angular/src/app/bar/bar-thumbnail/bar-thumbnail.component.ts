import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fbapp-bar-thumbnail',
  templateUrl: './bar-thumbnail.component.html',
  styleUrls: ['./bar-thumbnail.component.scss']
})
export class BarThumbnailComponent {
  @Input() public bar!: any;
  @Input() public isFavorite!: boolean;
  @Output() public chose = new EventEmitter<any>();

  public openBarDetails(): void {
    this.chose.emit(this.bar);
  }

}
