import {
  Component,
  ViewChildren,
  QueryList,
  ElementRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule
} from '@angular/forms';

import { Router, RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.css'
})
export class VerifyOtpComponent {

  @ViewChildren('otpInput')
  otpInputs!: QueryList<ElementRef<HTMLInputElement>>;

  otpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

    this.otpForm = this.fb.group({
      d1: [''],
      d2: [''],
      d3: [''],
      d4: [''],
      d5: [''],
      d6: ['']
    });

  }

  onInput(event: Event, index: number) {

    const input = event.target as HTMLInputElement;

    input.value = input.value.replace(/[^0-9]/g, '').slice(0, 1);

    const controls = ['d1','d2','d3','d4','d5','d6'];

    this.otpForm.get(controls[index])?.setValue(input.value);

    if (input.value && index < 5) {

      this.otpInputs.toArray()[index + 1].nativeElement.focus();

    }

  }

  onBackspace(event: KeyboardEvent, index: number) {

    if (event.key === 'Backspace') {

      const controls = ['d1','d2','d3','d4','d5','d6'];

      const value = this.otpForm.get(controls[index])?.value;

      if (!value && index > 0) {

        this.otpInputs.toArray()[index - 1].nativeElement.focus();

      }

    }

  }

  verifyOTP() {

    const otp =
      this.otpForm.value.d1 +
      this.otpForm.value.d2 +
      this.otpForm.value.d3 +
      this.otpForm.value.d4 +
      this.otpForm.value.d5 +
      this.otpForm.value.d6;

    if (otp === '123456') {

      this.router.navigate(['/reset-password']);

    } else {

      alert('Invalid OTP');

    }

  }

}