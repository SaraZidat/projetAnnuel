import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Marchand} from '../Marchand';

@Component({
  selector: 'fbapp-marchand-thumbnail',
  templateUrl: './marchand-thumbnail.component.html',
  styleUrls: ['./marchand-thumbnail.component.scss']
})
export class MarchandThumbnailComponent {
  @Input() public marchand!: Marchand;
  @Input() public isFavorite!: boolean;
  @Output() public chose = new EventEmitter<any>();

  /*public openMarchandDetails(marchand:Marchand): void {
    console.log(marchand);
    //this.chose.emit(this.marchand);
  }*/
  public onSelectCharacter(marchand: Marchand): void {

  }

}
