import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompoundDetailComponent } from './pages/compound-detail/compound-detail.component';
import { AddCompoundComponent } from './pages/add-compound/add-compound.component';

const routes: Routes = [
  { path: '', redirectTo: '/compounds', pathMatch: 'full' },
  { path: 'compounds', component: HomeComponent, title: 'Compounds' },
  {
    path: 'compounds/add',
    component: AddCompoundComponent,
    title: 'Add Compound',
  },
  {
    path: 'compounds/:id',
    component: CompoundDetailComponent,
    title: 'Compound Detail',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
