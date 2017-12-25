import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addr',
  template: `
  <p>This is addr works. {{username}}</p>
  <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm.value)">
    <fieldset ngModelGroup="user">
    <input type="text" required minlength="3" ngModel name="username">
    <hr>
    <input type="password" required ngModel name="password">
    </fieldset>
    <fieldset ngModelGroup="info">
    <hr>
    <div *ngFor="let version of versions;">
      <input [attr.id]="version" name="version" ngModel required [value]="version" type="radio">
      <label [attr.for]="version">{{version}}</label>
    </div>
    <hr>
    <select name="app" ngModel required>
      <option *ngFor="let app of apps;" [value]="app">
        {{app}}
      </option>
    </select>
    <label></label>
    </fieldset>
    <button type="submit">提交</button>
    <hr>
    {{loginForm.value | json}}
  </form>
  `,
  styles: [`
input.ng-invalid, select.ng-invalid {
    border: 2px solid red;
 }
input.ng-valid, select.ng-valid{
    border: 2px solid green;
 }
select.ng-invalid + label:after {
  content: '<-- 请选择版本!'
}
  `]
})
export class AddrComponent implements OnInit {
  versions = ['1.x', '2.x', '3.x'];
  apps = ['1.y', '2.y', '3.y'];
  onSubmit(value) {
    console.dir(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
