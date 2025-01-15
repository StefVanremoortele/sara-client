import { Component, ElementRef } from '@angular/core';

export class BaseComponent {
  protected me = '';
  protected inDevMode:boolean = true;
  
  constructor() {
    this.me = this.constructor.name;
  }

}
