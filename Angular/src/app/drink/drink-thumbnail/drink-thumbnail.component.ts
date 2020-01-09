import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fbapp-drink-thumbnail',
  templateUrl: './drink-thumbnail.component.html',
  styleUrls: ['./drink-thumbnail.component.scss']
})
export class DrinkThumbnailComponent {
  @Input() public drink!: any;
  @Output() public chose = new EventEmitter<any>();

  public choseDrink(): void {
    this.chose.emit(this.drink);
  }


}
