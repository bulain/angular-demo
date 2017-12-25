import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Area } from './area.interface';

@Component({
  selector: 'app-area',
  template: `
  <form novalidate (ngSubmit)="onSubmit(area)" [formGroup]="area">
  <label>
    <span>Full name</span>
    <input type="text" placeholder="Your full name" formControlName="name">
  </label>
  <div class="error" *ngIf="area.get('name').hasError('required') && area.get('name').touched">
    Name is required
  </div>
  <div class="error" *ngIf="area.get('name').hasError('minlength') && area.get('name').touched">
    Minimum of 2 characters
  </div>
  <div formGroupName="account">
    <label>
      <span>Email address</span>
      <input type="email" placeholder="Your email address" formControlName="email">
    </label>
    <div
      class="error"
      *ngIf="area.get('account').get('email').hasError('required') && area.get('account').get('email').touched">
      Email is required
    </div>
    <label>
      <span>Confirm address</span>
      <input type="email" placeholder="Confirm your email address" formControlName="confirm">
    </label>
    <div
      class="error"
      *ngIf="area.get('account').get('confirm').hasError('required') && area.get('account').get('confirm').touched">
      Confirming email is required
    </div>
  </div>
  <button type="submit" [disabled]="area.invalid">Sign up</button>
</form>
  `,
  styles: [`
  input.ng-invalid, select.ng-invalid {
    border: 2px solid red;
 }
input.ng-valid, select.ng-valid{
    border: 2px solid green;
 }
  `]
})
export class AreaComponent implements OnInit {
  area: FormGroup;
  constructor() {}
  ngOnInit() {
    this.area = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', Validators.required),
        confirm: new FormControl('', Validators.required)
      })
    });
  }
  onSubmit({ value, valid }: { value: Area, valid: boolean }) {
    console.log(value, valid);
  }

}
