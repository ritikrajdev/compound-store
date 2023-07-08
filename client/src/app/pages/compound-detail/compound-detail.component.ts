import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { API_URL } from 'src/app/config';
import { RequestService } from 'src/app/services/request.service';
import { Compound } from 'src/app/types/compound';

@Component({
  selector: 'app-compound-detail',
  templateUrl: './compound-detail.component.html',
  styleUrls: ['./compound-detail.component.css'],
})
export class CompoundDetailComponent {
  compound?: Compound | null;
  disabled: boolean = true;

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.requestService
      .get<Compound | null>(
        `${API_URL}/compounds/${id}`,
        null,
        `could not get compound with id ${id}`
      )
      .subscribe((compound) => {
        this.compound = compound;
      });
  }

  enableEditing() {
    this.disabled = false;
  }

  saveCompound(compoundName: string, compoundDescription: string) {
    const newCompound = {
      ...this.compound,
      compoundName,
      compoundDescription,
    };
    delete newCompound.id;

    this.requestService
      .put<Compound | null>(
        `${API_URL}/compounds/${this.compound?.id}`,
        newCompound,
        null,
        `could not update compound with id ${this.compound?.id}`
      )
      .subscribe((compound) => {
        if (compound) {
          this.compound = compound;
          this.disabled = true;
        }
      });
  }

  deleteCompound() {
    this.requestService
      .delete<any>(
        `${API_URL}/compounds/${this.compound?.id}`,
        null,
        `could not delete compound with id ${this.compound?.id}`
      )
      .subscribe((x) => {
        this.router.navigate(['/compounds']);
      });
  }
}
