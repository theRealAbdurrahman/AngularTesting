// import { By } from '@angular/platform-browser';
// import { HeroService } from './../hero.service';
// import {  Component, Input } from '@angular/core';
// import { ComponentFixture } from '@angular/core/testing';
// import { HeroesComponent } from './heroes.component';
// import { TestBed } from '@angular/core/testing';
// import { of } from 'rxjs/observable/of';

// describe('HeroS Component (shallow test)', () => {
//   let fixture: ComponentFixture<HeroesComponent>;
//   let component: HeroesComponent;
//   let mockHeroService;
//   let HEROES: Object[];
//   let de;
//   // create fake hero component
//   @Component({
//     selector: 'app-hero',
//     template: `
//       <div></div>
//     `
//   })
//   class FakeHeroComponent {
//     @Input() hero: any;
//   }

//   beforeEach(() => {
//     HEROES = [
//       { id: 11, name: 'Mr. Nice', strength: 10 },
//       { id: 12, name: 'Narco', strength: 5 },
//       { id: 13, name: 'Bombasto', strength: 8 },
//       { id: 14, name: 'Celeritas', strength: 15 },
//       { id: 15, name: 'Magneta', strength: 22 },
//       { id: 16, name: 'RubberMan', strength: 50 },
//       { id: 17, name: 'Dynama', strength: 43 },
//       { id: 18, name: 'Dr IQ', strength: 4 },
//       { id: 19, name: 'Magma', strength: 18 },
//       { id: 20, name: 'Tornado', strength: 15 }
//     ];
//     mockHeroService = jasmine.createSpyObj([
//       'getHeroes',
//       'addHero',
//       'deleteHero'
//     ]);
//     TestBed.configureTestingModule({
//       declarations: [HeroesComponent, FakeHeroComponent],
//       providers: [{ provide: HeroService, useValue: mockHeroService }]
//       // we are using this schema to stop the error of app-hero unknown element, but it hides any errors in the template also (which we doesn't want to happen), so instead we will create a fake hero component and use it to be able to test our template also.
//       // schemas: [NO_ERRORS_SCHEMA]
//     });
//     fixture = TestBed.createComponent(HeroesComponent);
//     component = fixture.componentInstance;
//     de = fixture.debugElement;
//   });

//   it('should cal getHeroes() when initialized', () => {
//     spyOn(component, 'getHeroes');
//     fixture.detectChanges(); // this runs ngOnInit
//     expect(component.getHeroes).toHaveBeenCalled();
//   });

//   it('should display the correct number of heroes in the list', () => {
//     mockHeroService.getHeroes.and.returnValue(of(HEROES));
//     fixture.detectChanges(); // to do the bindings
//     // component.getHeroes()
//     const li = de.queryAll(By.css('.heroes li'));

//     expect(li.length).toEqual(HEROES.length);
//   });

//   describe('getHeroes()', () => {
//     it('should return heroes from the server', () => {
//       mockHeroService.getHeroes.and.returnValue(of(HEROES));
//       fixture.detectChanges();
//       expect(component.heroes.length).toEqual(HEROES.length);
//     });
//   });
// });
