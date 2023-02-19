import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class AppButtonComponent {
  /**
   * Input  of app button component will have text and color
   * Color values can only be string 'btn-white' | 'btn-green' | 'btn-danger'
   */
  @Input() text: string = '';
  @Input() color!: 'btn-white' | 'btn-green' | 'btn-danger';
  constructor() {}
}
