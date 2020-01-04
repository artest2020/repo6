import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { Repo6TestModule } from '../../../test.module';
import { FrasesUpdateComponent } from 'app/entities/frases/frases-update.component';
import { FrasesService } from 'app/entities/frases/frases.service';
import { Frases } from 'app/shared/model/frases.model';

describe('Component Tests', () => {
  describe('Frases Management Update Component', () => {
    let comp: FrasesUpdateComponent;
    let fixture: ComponentFixture<FrasesUpdateComponent>;
    let service: FrasesService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [Repo6TestModule],
        declarations: [FrasesUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(FrasesUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(FrasesUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(FrasesService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Frases(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new Frases();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
