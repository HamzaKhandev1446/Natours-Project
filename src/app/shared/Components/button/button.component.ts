import { Component, Input } from '@angular/core';

/**
 * @author Muhammad Hamza Khan
 * @datetime 20 02 2023
 * @description: AppButtonComponent is developed generalized with all the
 * necessary styles, colors and animation required for in a
 * button. There will be three optional arguments to this -
 * component: text, color and animation.
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class AppButtonComponent {
  /* text can be string */
  @Input() text: string = '';
  /* color can be 'btn-white' | 'btn-green' | 'btn-danger' */
  @Input() color!: 'btn-white' | 'btn-green' | 'btn-danger';
  /* animation can only be :
  | 'btn-animated-left'
  | 'btn-animated-right'
  | 'btn-animated-top'
  | 'btn-animated-bottom'*/
  @Input() animation!:
    | 'btn-animated-left'
    | 'btn-animated-right'
    | 'btn-animated-top'
    | 'btn-animated-bottom';
  constructor() {}
}
