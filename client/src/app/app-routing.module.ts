import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CompoundDetailComponent } from './pages/compound-detail/compound-detail.component';
import { AddCompoundComponent } from './pages/add-compound/add-compound.component';

const routes: Routes = [
  { path: '', redirectTo: '/compounds', pathMatch: 'full' },
  { path: 'compounds', component: HomeComponent },
  { path: 'compounds/add', component: AddCompoundComponent },
  { path: 'compounds/:id', component: CompoundDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
