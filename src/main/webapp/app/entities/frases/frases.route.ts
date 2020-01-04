import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IFrases, Frases } from 'app/shared/model/frases.model';
import { FrasesService } from './frases.service';
import { FrasesComponent } from './frases.component';
import { FrasesDetailComponent } from './frases-detail.component';
import { FrasesUpdateComponent } from './frases-update.component';

@Injectable({ providedIn: 'root' })
export class FrasesResolve implements Resolve<IFrases> {
  constructor(private service: FrasesService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IFrases> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((frases: HttpResponse<Frases>) => {
          if (frases.body) {
            return of(frases.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Frases());
  }
}

export const frasesRoute: Routes = [
  {
    path: '',
    component: FrasesComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'repo6App.frases.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: FrasesDetailComponent,
    resolve: {
      frases: FrasesResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'repo6App.frases.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: FrasesUpdateComponent,
    resolve: {
      frases: FrasesResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'repo6App.frases.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: FrasesUpdateComponent,
    resolve: {
      frases: FrasesResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'repo6App.frases.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];
