import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { Repo6TestModule } from '../../../test.module';
import { FrasesComponent } from 'app/entities/frases/frases.component';
import { FrasesService } from 'app/entities/frases/frases.service';
import { Frases } from 'app/shared/model/frases.model';

describe('Component Tests', () => {
  describe('Frases Management Component', () => {
    let comp: FrasesComponent;
    let fixture: ComponentFixture<FrasesComponent>;
    let service: FrasesService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [Repo6TestModule],
        declarations: [FrasesComponent],
        providers: []
      })
        .overrideTemplate(FrasesComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(FrasesComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(FrasesService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Frases(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.frases && comp.frases[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
