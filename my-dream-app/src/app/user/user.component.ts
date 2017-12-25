import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <p>
      user works! {{username}}
    </p>
    <input type="text" [(ngModel)]="username" required minlength="3" #userName="ngModel" />
    <hr>
    <p>Name控件的valid状态：{{userName.valid}} - 表示控件有效</p>
    <p>Name控件的invalid状态：{{userName.invalid}} - 表示控件无效</p>
    <p>Name控件的pristine状态：{{userName.pristine}} - 表示控件值未改变</p>
    <p>Name控件的dirty状态：{{userName.dirty}} - 表示控件值已改变</p>
    <p>Name控件的touched状态：{{userName.touched}} - 表示控件已被访问过</p>
    <p>Name控件的untouched状态：{{userName.untouched}} - 表示控件未被访问过</p>
    <div *ngIf="userName.errors?.required">请您输入用户名</div>
    <div *ngIf="userName.errors?.minlength">
      用户名的长度必须大于等于 {{userName.errors?.minlength.requiredLength}}，当前的长度为
        {{userName.errors?.minlength.actualLength}}
  `,
  styles: [`
  input.ng-invalid {
      border: 2px solid red;
   }
  input.ng-valid {
      border: 2px solid green;
   }
 `]
})
export class UserComponent implements OnInit {
  username: string;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe((params) => this.username = params.username);
  }

}
