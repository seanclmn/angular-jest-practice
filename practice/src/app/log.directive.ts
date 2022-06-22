import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[logDirective]',
})
export class LogDirective {

  constructor() { }

  @HostListener('click') onClick(){
    console.log('Element clicked!')}
}
