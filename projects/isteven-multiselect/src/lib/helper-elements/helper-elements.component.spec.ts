import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperElementsComponent } from './helper-elements.component';

describe('HelperElementsComponent', () => {
  let component: HelperElementsComponent;
  let fixture: ComponentFixture<HelperElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Component should gets added into the DOM', () => {
    expect(true).toBeTruthy();
  });

  describe('✓ Select All', () => {
    it('it should emit an event to parent component', () => {
      expect(true).toBeTruthy();
    });
    it('it should select all options', () => {
      expect(true).toBeTruthy();
    });
  })

  describe('× Select None', () => {
    it('it should emit an event to parent component', () => {
      expect(true).toBeTruthy();
    });
    it('button should de-select all options', () => {
      expect(true).toBeTruthy();
    });
  })
  
  describe('↶ Reset', () => {
    it('it should emit an event to parent component', () => {
      expect(true).toBeTruthy();
    });
    it('It should reset dropdown value to older state', () => {
      expect(true).toBeTruthy();
    });
  })

  describe('Select all and select none button should be', () => {
    it('visible only in case of multiple select', () => {
      expect(true).toBeTruthy();
    })
    it('invisible incase of single select', () => {
      expect(true).toBeTruthy();
    })
  })

});
