import { Component, Input } from '@angular/core';
import { Compound } from 'src/app/types/compound';

@Component({
  selector: 'app-compound',
  templateUrl: './compound.component.html',
  styleUrls: ['./compound.component.css'],
})
export class CompoundComponent {
  @Input() compound!: Compound;
}
