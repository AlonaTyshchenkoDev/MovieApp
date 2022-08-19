import {
  AfterContentChecked,
  AfterContentInit,
  Directive,
  ElementRef, HostListener,
  Renderer2

} from '@angular/core';
import { defaultPosterImg } from '../shared/constants';

@Directive({
  selector: '[imgLoader]'
})
export class LoadImageDirective implements AfterContentInit, AfterContentChecked {

  public loadImg: string = 'assets/images/img.spinner.svg';
  public defaultPosterImg = defaultPosterImg;
  public src: string;
  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngAfterContentInit() {
    const img: HTMLImageElement = this.el.nativeElement.querySelector('img');
    this.src = img.src;
    this.renderer.setAttribute(img, 'src', this.loadImg);
    this.isImageOk(img);
  }
  ngAfterContentChecked(){
    const img: HTMLImageElement = this.el.nativeElement.querySelector('img');
    this.isImageOk(img);
  }

  isImageOk(img: HTMLImageElement): boolean {
    if (!img.complete) {
      this.renderer.setAttribute(img, 'src', this.loadImg);
      return false;
    }
    if (img.complete && img.naturalWidth == 0) {
      this.renderer.setAttribute(img, 'src', this.loadImg);
      return false;
    }
    img.src = this.src;
    return true;
  }

}
