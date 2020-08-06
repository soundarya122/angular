import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  heroes: Hero[];
  constructor(

  ) { }

  ngOnInit(): void {
    this.heroes = HEROES;
  }

}
