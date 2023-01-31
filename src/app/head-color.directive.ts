import { Directive, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';

@Directive({
  selector: '[appHeadColor]'
})
export class HeadColorDirective {

  @HostBinding('style.background') color:string;

  @HostListener('mouseover') setMouseOver(){
    this.color="red";
  }
 
  constructor() { 
    // this.el.nativeElement.style.color="Red";
    this.color = "yellow";
  }

}
