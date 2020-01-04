import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { Repo6TestModule } from '../../../test.module';
import { FrasesDetailComponent } from 'app/entities/frases/frases-detail.component';
import { Frases } from 'app/shared/model/frases.model';

describe('Component Tests', () => {
  describe('Frases Management Detail Component', () => {
    let comp: FrasesDetailComponent;
    let fixture: ComponentFixture<FrasesDetailComponent>;
    const route = ({ data: of({ frases: new Frases(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [Repo6TestModule],
        declarations: [FrasesDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(FrasesDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(FrasesDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load frases on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.frases).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
