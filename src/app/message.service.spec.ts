/*
 * Testing a Service
 * More info: https://angular.io/docs/ts/latest/guide/testing.html
 */

import { TestBed, async, inject } from '@angular/core/testing';
import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

    beforeEach(() => {
        // TestBed.configureTestingModule({
        //     providers: [
        //         MessageService
        //         // for additional providers, write as examples below
        //         // ServiceName,
        //         // { provider: ServiceName, useValue: fakeServiceName },
        //         // { provider: ServiceName, useClass: FakeServiceClass },
        //         // { provider: ServiceName, useFactory: fakeServiceFactory, deps: [] },
        //     ]
        // });
      service = new MessageService();

    });

    // you can also wrap inject() with async() for asynchronous tasks
    // it('...', async(inject([...], (...) => {}));

    // it('should enter the assertion',
    //     inject([MessageService], (s: MessageService) => {
    //         expect(enterAValue).toBe(enterTheExpectedResult);
    //         // expect('1').toEqual(1);
    //     })
    // );


    it('should have to messages to begin with', () => {
       expect(service.messages.length).toBe(0)
    });
    it('should add message when add() is a called', () => {
      service.add('mess 1');
      expect(service.messages.length).toBe(1);
    });
    it('should clear all messages when clear() is called', () => {
      service.add('mess1');
      service.add('mess2');

      service.clear();
      
      expect(service.messages.length).toBe(0);
    });


});
