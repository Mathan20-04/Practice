import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes:Hero[] =[];

  constructor( private heroService:HeroService,private location: Location ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,5));
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(2,6));
  }

}
