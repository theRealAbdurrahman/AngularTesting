import { fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ComponentFixture } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Hero Component (shallow)', () => {
  let fixture: ComponentFixture<HeroComponent>;
  let comp: HeroComponent;
  let de;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should have the correct hero', () => {
    comp.hero = { id: 1, name: 'bedo', strength: 100 };
    expect(comp.hero.name).toEqual('bedo');
  });

  it('should render the hero name inide an anchor tag', () => {
    comp.hero = { id: 1, name: 'bedo', strength: 100 };
    fixture.detectChanges(); // Do the binding w kda
    expect(de.query(By.css('a')).nativeElement.textContent).toContain('bedo');
      // fixture.nativeElement.querySelector('a').textContent
  });

  it('should call onDeleteClick() when the btn is clicked', fakeAsync(() => {
    const onDeleteSpy = spyOn(comp, 'onDeleteClick');
    const btn = de.query(By.css('button'));
    btn.triggerEventHandler('click', null);
    expect(onDeleteSpy).toHaveBeenCalled();
  }));
});
