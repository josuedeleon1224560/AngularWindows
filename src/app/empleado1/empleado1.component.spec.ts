/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Empleado1Component } from './empleado1.component';

describe('Empleado1Component', () => {
  let component: Empleado1Component;
  let fixture: ComponentFixture<Empleado1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Empleado1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Empleado1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
