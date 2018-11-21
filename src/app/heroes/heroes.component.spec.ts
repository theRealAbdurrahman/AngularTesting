// import { of } from 'rxjs/observable/of';
// import { Hero } from './../hero';
// import { HeroesComponent } from './heroes.component';

// describe('HeroesComponent', () => {
//   let comp: HeroesComponent;
//   let HEROES: Hero[];
//   let mockHeroService;
//   beforeEach(() => {
//     HEROES = [
//       { id: 1, name: 'spiderdude', strength: 8 },
//       { id: 2, name: 'spiderman', strength: 9 },
//       { id: 3, name: 'spiderwoman', strength: 2 }
//     ];
//     mockHeroService = jasmine.createSpyObj([
//       'getHeroes',
//       'addHeroes',
//       'deleteHero'
//     ]);
//     comp = new HeroesComponent(mockHeroService);
//   });

//   describe('delete()', () => {
//     it('should remove the passed hero from the heroes list', () => {
//       mockHeroService.deleteHero.and.returnValue(of(true));
//       comp.heroes = HEROES;

//       comp.delete(comp.heroes[2]);

//       expect(comp.heroes.indexOf(comp.heroes[2])).toEqual(-1);
//     });

//     it('Should call heroService.deleteHero() with the correct hero passed', () => {
//       mockHeroService.deleteHero.and.returnValue(of(true));
//       comp.heroes = HEROES;

//       comp.delete(comp.heroes[2]);

//       expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
//     });
//   });
// });

