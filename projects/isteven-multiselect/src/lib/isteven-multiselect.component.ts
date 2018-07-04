import { Component, OnInit, Input, ChangeDetectionStrategy, ElementRef, HostListener, Injector, forwardRef, SimpleChanges } from '@angular/core';
import { IstevenMultiselectService } from './isteven-multiselect.service';
import { IstevenMultiselectBaseComponent } from './isteven-multiselect-base.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

export const DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => IstevenMultiselectComponent),
  multi: true
}

@Component({
  selector: 'ngx-isteven-multiselect',
  templateUrl: './isteven-multiselect.component.html',
  styleUrls: ['./isteven-multiselect.component.css'],
  providers: [DEFAULT_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IstevenMultiselectComponent extends IstevenMultiselectBaseComponent implements OnInit {

  constructor(
    protected elementRef: ElementRef,
    protected istevenMultiselectService: IstevenMultiselectService,
    protected injector: Injector) {
    super(injector);
  }

  // private variables
  private _multiple = false;
  private _propertyMap = {
    'id': 'id',
    'name': 'name'
  };
  private _optionsCopy = [];

  // public variables
  _options = [];
  @Input()
  selectedOptions: any | any[] = null;

  // Input bindings
  @Input() isOpen: boolean = false;
  @Input() disabled: boolean = false;
  @Input() ofPrimitiveType: boolean = false;
  @Input() showMaxLabels: number = 3;

  @Input() set propertyMap(val) {
    this._propertyMap = { ...this._propertyMap, ...val };
  }
  @Input()
  set options(collection) {
    if (this.ofPrimitiveType) {
      this._optionsCopy = collection.map((item: any, index: number) => ({ id: index, name: item }))
    } else {
      let keys = Object.keys(this._propertyMap);
      this._optionsCopy = collection.map((item: any, index: number) => {
        let obj = {};
        keys.reduce((a: any, b: string) => { obj[b] = item[this._propertyMap[b]] }, obj)
        return obj;
      })
    }
    this.setOptions();
  }

  @Input()
  get multiple() {
    return this._multiple;
  }
  set multiple(value: boolean) {
    // TODO: remove belove line
    if (value) this.selectedOptions = [];
    this._multiple = value;
  }

  ngOnInit() {
  }

  setOptions() {
    this._options = [...this._optionsCopy]
  }

  isValueSelected() {
    return this._multiple ? this.selectedOptions.length : this.selectedOptions;
  }

  close() {
    this.isOpen = false;
  }

  clear() {
    this.selectedOptions = this._multiple ? [] : null;
    this.close();
    this.viewToModel(this.selectedOptions);
  }

  removeItem(item) {
    item.ticked = false;
    let index = this.selectedOptions.findIndex(o => o.id === item.id);
    this.selectedOptions.splice(index, 1);
  }

  select(option) {
    if (this._multiple) {
      let selectedIds = this.selectedOptions.map(i => i.id);
      if (selectedIds.indexOf(option.id) === -1) {
        option.ticked = !option.ticked;
        this.selectedOptions.push(option);
      } else {
        option.ticked = false;
        this.removeItem(option)
      }
    } else {
      // TODO: find optimized way to do below
      this._options.forEach(o => o.ticked = false);
      option.ticked = true;
      this.selectedOptions = option;
      this.close();
    }
    this.viewToModel(this.selectedOptions);
  }

  // TODO: Consider creating a directive for this.
  // TODO: Also convert below to be work for element specific
  @HostListener('document:click', ['$event.target'])
  clickOutSide(event) {
    if (this.elementRef.nativeElement !== event && !this.istevenMultiselectService.closest(event, 'ngx-isteven-multiselect') && this.isOpen) {
      this.close();
    }
  }

  selectAll() {
    this.selectedOptions = this._options.map(o => {
      o.ticked = true;
      return o;
    });
    this.viewToModel(this.selectedOptions);
  }

  selectNone() {
    this._options.forEach(o => o.ticked = false);
    this.selectedOptions = [];
    this.viewToModel([]);
  }

  viewToModel(options) {
    this.onChange(options);
    // this.writeValue(options);
  }

  reset() {
    //TODO: Rever selectOptions value to older value
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.selectedOptions.currentValue !== changes.selectedOptions.previousValue) {
      this.viewToModel([]);
    }
  }

}