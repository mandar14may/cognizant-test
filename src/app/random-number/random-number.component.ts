import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-random-number',
  templateUrl: './random-number.component.html',
  styleUrl: './random-number.component.scss'
})
export class RandomNumberComponent {
  numberForm: FormGroup;
  randomNumber: string | undefined;
  timeIntervalID: any;
  options = [0,1,2,3,4,5,6,7,8,9]

  constructor(private fb: FormBuilder) {
    this.numberForm = this.fb.group({
      favoriteNumber: ['', Validators.required],
      numberLength: ['', [Validators.required,Validators.min(1), Validators.max(19)]]
    })
  }

  onSubmit() {
    if (this.numberForm.valid) {
      console.log(this.numberForm.value)
      if(this.timeIntervalID){
        console.log('clearing interval')
        clearInterval(this.timeIntervalID);
      }  
      this.randomNumber = this.generateRandomNumber(this.numberForm.value.favoriteNumber,this.numberForm.value.numberLength - 1)
      this.timeIntervalID = setInterval(() => {
        this.randomNumber = this.generateRandomNumber(this.numberForm.value.favoriteNumber,this.numberForm.value.numberLength - 1)
      }, 5000);
    }
  }

  generateRandomNumber(num: number,size: number){
    const rnum = Math.floor(Math.random() * Math.pow(10, size));
    const paddedRnum = rnum.toString().padStart(size, '0');
    const combinedNumber = paddedRnum + num.toString();
    console.log(combinedNumber, 'random number.')
    return combinedNumber;
  }


}
