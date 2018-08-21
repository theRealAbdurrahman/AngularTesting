import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeroDetailComponent } from "./hero-detail.component";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "../hero.service";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { of } from "rxjs/observable/of";
import { Location } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

describe("HeroDetailComponent", () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let mockActivatedRoute, mockHeroService, mockLocation;

  beforeEach(async(() => {
    mockActivatedRoute = { snapshot: { paramMap: { get: () => {
            return 3;
          } } } };
    mockHeroService = jasmine.createSpyObj([
      "getHero",
      "updateHero"
    ]);

    mockHeroService.getHero.and.returnValue(of({
        id: 3,
        name: "SuperDude",
        strength: 100
      }));

    mockHeroService.getHero(3).subscribe(data => console.log());

    mockLocation = jasmine.createSpyObj(["back"]);

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HeroDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: HeroService, useValue: mockHeroService },
        { provide: Location, useValue: mockLocation }
      ],
    //   schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
  });

  it("Should render the hero name in a h2 tag", () => {
    console.log(component);
    fixture.detectChanges();

    console.log(fixture.debugElement.query(By.css("h2")));
    expect(fixture.nativeElement.querySelector("h2").textContent).toContain("SuperDude");
  });
});
