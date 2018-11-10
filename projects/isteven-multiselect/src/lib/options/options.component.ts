import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'im-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  @Input() disabled: boolean = false;
  @Input() options: any[];
  @Output() selectOption = new EventEmitter<any>();

  constructor() { }

  getOptionStyle(option: any) {
    return {'marked': option.ticked, disabled: (this.disabled || option.disabled)};
  }

  select (option) {
    this.selectOption.emit(option);
  }

  ngOnInit() {
  }

}
