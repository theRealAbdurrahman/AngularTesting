import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from "rxjs/observable/of";
import { HeroesComponent } from './heroes.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeroService } from '../hero.service';

describe('HeroComponent (shallow test) ', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES;

  beforeEach(async(() => {
    HEROES = [
        {id: 1, name: "SpiderDude", strength: 8},
        {id: 2, name: "Wonderful Woman", strength: 24},
        {id: 3, name: "SuperDude", strength: 55},
    ];
    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHeroes', 'deleteHeroes']);

    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      providers: [
          {provide: HeroService, useValue: mockHeroService}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    mockHeroService.getHeroes.and.returnValue(of(HEROES));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should set the heores correctly from the service", () => {
    expect(component.heroes.length).toBe(3); 
  });



});
