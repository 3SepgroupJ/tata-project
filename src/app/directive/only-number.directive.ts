import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.onkeypress =(evt:any)=>{
      if(evt && evt.charCode && (evt.charCode < 48 || evt.charCode > 57)){
        evt.preventDefault();
      }
      }
  }

  // @HostBinding('style.color')color!:string;

  // @HostListener('keypress', ['$Event'])
  // onkeypress(event: any) {
  //   console.log(this.el.nativeElement);
  //   this.color='blue';
  //   if (event && event.which && (event.which < 48 || event.which > 57)) {
  //     event.preventDefault();
  //   }
  // }
}