import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParfumesComponent } from './parfumes.component';
import { PerfumeProfileComponent } from './perfume-profile/perfume-profile.component';

const routes: Routes = [
  { path: '', component: ParfumesComponent },
  { path: 'perfumeProfile/:id', component: PerfumeProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParfumesRoutingModule { }
