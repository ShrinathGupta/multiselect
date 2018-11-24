import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  getSingleSelectOptions () {
    return this.singleSelectOptions;
  }

  getMultipleSelectOptions () {
    return this.multipleSelectOptions;
  }

  getGroupingOptions () {
    return this.groupingOptions;
  }

  getObservableOptions () {
    return of(this.observableOptions);
  }

  private singleSelectOptions = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'},
    {id: 4, name: 'd', disabled: true},
    {id: 5, name: 'e'},
  ]

  private multipleSelectOptions = [
    {id: 1, name: 'Test 1'},
    {id: 2, name: 'Test 2'},
    {id: 3, name: 'Test 3'},
    {id: 4, name: 'Test 4'},
    {id: 5, name: 'Test 5'}
  ]

  private groupingOptions = [
    {id: 1, name: 'Test 1', category: 'Cat 1'},
    {id: 2, name: 'Test 2', category: 'Cat 1'},
    {id: 3, name: 'Test 3', category: 'Cat 2'},
    {id: 4, name: 'Test 4', category: 'Cat 2'},
    {id: 5, name: 'Test 5', category: 'Cat 3'}
  ]

  private observableOptions = [
    {id: 1, name: 'Test 1'},
    {id: 2, name: 'Test 2'},
    {id: 3, name: 'Test 3'},
    {id: 4, name: 'Test 4'},
    {id: 5, name: 'Test 5'}
  ]

  constructor() { }

}
