import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph',{ static: true}) paragraph: ElementRef;

  constructor() { 
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called ");
    console.log(changes)
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log("Text content: " + this.header.nativeElement.textContent);
    console.log("Text content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log("ngDoCheck called");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
    console.log("After Text content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called");
    console.log("Header text: " + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called");
  }

}
