// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { By } from '@angular/platform-browser';
// import { of } from 'rxjs/observable/of';
// import { HeroesComponent } from './heroes.component';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { HeroService } from '../hero.service';
// import { HeroComponent } from '../hero/hero.component';

// describe('HeroComponent (deep test) ', () => {
//   let component: HeroesComponent;
//   let fixture: ComponentFixture<HeroesComponent>;
//   let mockHeroService;
//   let HEROES;

//   beforeEach(async(() => {
//     HEROES = [
//       { id: 1, name: 'SpiderDude', strength: 8 },
//       { id: 2, name: 'Wonderful Woman', strength: 24 },
//       { id: 3, name: 'SuperDude', strength: 55 }
//     ];
//     mockHeroService = jasmine.createSpyObj([
//       'getHeroes',
//       'addHero',
//       'deleteHero'
//     ]);

//     TestBed.configureTestingModule({
//       declarations: [HeroesComponent, HeroComponent],
//       providers: [{ provide: HeroService, useValue: mockHeroService }],
//       schemas: [NO_ERRORS_SCHEMA]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HeroesComponent);
//     component = fixture.componentInstance;
//     mockHeroService.getHeroes.and.returnValue(of(HEROES));
//     // to run ngOnInt.
//     // btw when change detection happen in the parent it also happens in the children
//     fixture.detectChanges();
//   });

//   it('should set the heores correctly from the service', () => {
//     expect(component.heroes.length).toBe(3);
//   });

//   it('Should Rendered each hero as a HeroComponent', () => {
//     // getting ref to the hero child component debug element
//     const heroComponentDEs = fixture.debugElement.queryAll(
//       // actually component are directives
//       By.directive(HeroComponent)
//     );

//     expect(heroComponentDEs.length).toEqual(HEROES.length);
//     for (let i = 0; i < heroComponentDEs.length; i++) {
//       expect(heroComponentDEs[i].componentInstance.hero).toEqual(HEROES[i]);
//     }
//   });

//   it('Should call heroService.deleteHero when the Hero components  delete btn clicked', () => {
//     spyOn(component, 'delete');

//     fixture.detectChanges();
//     const heroComponents = fixture.debugElement.queryAll(
//       By.directive(HeroComponent)
//     );

//     /* heroComponents[0]
//       .query(By.css("button"))
//       .triggerEventHandler("click", { stopPropagation: () => {} });
//     */

//     // (<HeroComponent>heroComponents[0].componentInstance).delete.emit(undefined);
//     heroComponents[0].triggerEventHandler('delete', null);

//     expect(component.delete).toHaveBeenCalledWith(HEROES[0]);
//     console.log(component.heroes.length);
//   });

//   it('should add the new hero to hero list when the add button is clicked', () => {
//     const name = 'Mr Ice';

//     mockHeroService.addHero.and.returnValue(
//       of({ id: 5, name: name, strength: 4 })
//     );
//     const inputElement = fixture.debugElement.query(By.css('input'))
//       .nativeElement;
//     const addButton = fixture.debugElement.queryAll(By.css('button'))[0];

//     inputElement.value = name;
//     addButton.triggerEventHandler('click', null);

//     fixture.detectChanges();

//     const heroText = fixture.debugElement.query(By.css('ul')).nativeElement
//       .textContent;
//     expect(heroText).toContain(name);
//   });
// });
