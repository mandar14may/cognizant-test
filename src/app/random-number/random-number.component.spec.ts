import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNumberComponent } from './random-number.component';

import { ReactiveFormsModule } from '@angular/forms'; // For Reactive Forms
import { MatFormFieldModule } from '@angular/material/form-field'; // For mat-form-field
import { MatInputModule } from '@angular/material/input'; // For matInput
import { MatSelectModule } from '@angular/material/select'; // For mat-select
import { MatOptionModule } from '@angular/material/core'; // For mat-option
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RandomNumberComponent', () => {
  let component: RandomNumberComponent;
  let fixture: ComponentFixture<RandomNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomNumberComponent],
      imports: [ 
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    expect(component.numberForm).toBeDefined();
    expect(component.numberForm.controls['favoriteNumber'].value).toBe('');
    expect(component.numberForm.controls['numberLength'].value).toBe('');
  });

  it('should make the favoriteNumber control required', () => {
    const favoriteNumberControl = component.numberForm.controls['favoriteNumber'];
    favoriteNumberControl.setValue('');
    expect(favoriteNumberControl.valid).toBeFalsy();
  });

  it('should validate numberLength control', () => {
    const numberLengthControl = component.numberForm.controls['numberLength'];

    numberLengthControl.setValue(0);
    expect(numberLengthControl.valid).toBeFalsy();

    numberLengthControl.setValue(1);
    expect(numberLengthControl.valid).toBeTruthy(); 

    numberLengthControl.setValue(20);
    expect(numberLengthControl.valid).toBeFalsy(); 
  });

  it('should generate a random number correctly', () => {
    const generatedNumber = component.generateRandomNumber(5, 3); 
    expect(generatedNumber).toMatch(/[0-9]{3}5/); 
  });

  it('should set the randomNumber and clear interval on submit', () => {
    component.numberForm.controls['favoriteNumber'].setValue(5);
    component.numberForm.controls['numberLength'].setValue(3);
    component.onSubmit();
    expect(component.timeIntervalID).toBeDefined();
  });

});
