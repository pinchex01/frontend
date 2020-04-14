import {Component} from '@angular/core';

/** @title Form field appearance variants */
@Component({
  selector: 'form-field-appearance-example',
  templateUrl: 'form-field-appearance-example.html',
  styleUrls: ['form-field-appearance-example.css'],
})
export class FormFieldAppearanceExample {
  times = [
    {value: 'steak-0', viewValue: 'Days'},
    {value: 'pizza-1', viewValue: 'Weeks'},
    {value: 'tacos-2', viewValue: 'Months'}
  ];
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
