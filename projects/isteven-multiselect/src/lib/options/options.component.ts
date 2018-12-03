import { 
  Component, OnInit, Input, EventEmitter, Output,
  ChangeDetectionStrategy, TemplateRef, ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'im-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // TODO: find better way, without encapsulation none thing
  encapsulation: ViewEncapsulation.None
})
export class OptionsComponent implements OnInit {

  @Input() disabled: boolean = false;
  @Input() options: any[];
  @Input() itemTemplate: TemplateRef<any>;
  @Output() selectOption = new EventEmitter<any>();
  constructor() { }

  getOptionStyle(option: any) {
    return {'marked': option.ticked, disabled: (this.disabled || option.disabled)};
  }

  select (option) {
    this.selectOption.emit(option);
  }

  trackByOption (option) {
    return option.id
  }

  ngOnInit() {
  }

}