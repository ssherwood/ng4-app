import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen = false;

  // constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  // }

  ngOnInit() {
  }

  @HostListener('click', ['$event']) toggleOpen(event) {
    //console.log("clicked ", event);
    this.isOpen = !this.isOpen;
  }
}
