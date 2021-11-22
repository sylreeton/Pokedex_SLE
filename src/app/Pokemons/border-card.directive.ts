import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
selector:'[pkmBorderCard]'
})
export class BorderCardDirective{
@Input('color') color : string;
  constructor(
    private el : ElementRef
  ){
    this.setBorder('#f5f5f5');
    this.setHeight(180);
  }
  @HostListener('mouseenter',['$event']) onMouseEnter(){
      this.setBorder(this.color || '#008000');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('#f5f5f5');
  }
  private setBorder(color: string){
    let border = 'solid 4px' + color;
    this.el.nativeElement.style.border = border
  }
  private setHeight(heigh : number)
  {
    this.el.nativeElement.style.height + heigh +'px';
  }

}
