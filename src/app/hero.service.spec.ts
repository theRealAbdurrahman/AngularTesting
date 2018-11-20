// import { TestBed, inject } from '@angular/core/testing';

// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
// import { MessageService } from './message.service';
// import { HeroService } from './hero.service';

// describe('HeroService', () => {
//     let mockMessageService;
//     let httpTestingController: HttpTestingController;
//     let service: HeroService;

//     beforeEach(() => {
//         mockMessageService = jasmine.createSpyObj(['add']);

//         TestBed.configureTestingModule({
//             imports: [
//                 HttpClientTestingModule
//             ],
//             providers: [
//                 HeroService,
//                 { provide: MessageService, useValue: mockMessageService}
//             ]
//         })
//         .compileComponents();

//         httpTestingController = TestBed.get(HttpTestingController);
//         service = TestBed.get(HeroService);
//         let msgService = TestBed.get(MessageService);

//     });

//     describe('getHero', () => {
//         it('should call the get with the correct url', () => {
//             service.getHero(4).subscribe(() => {});

//             const req = httpTestingController.expectOne('api/heroes/4');
//             req.flush({ id: 4, name: 'SuperDude', strength: 100 });
//         });
//     });

// });
