import { Component } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Router } from '@angular/router';
import { API_URL } from 'src/app/config';
import { Compound } from 'src/app/types/compound';

@Component({
  selector: 'app-add-compound',
  templateUrl: './add-compound.component.html',
  styleUrls: ['./add-compound.component.css'],
})
export class AddCompoundComponent {
  constructor(private requestService: RequestService, private router: Router) {}

  submitForm(
    compoundName: string,
    compoundDescription: string,
    compoundImageUrl: string
  ) {
    const compound = {
      compoundName,
      compoundDescription,
      compoundImageUrl,
    };

    this.requestService
      .post<Compound | null>(
        `${API_URL}/compounds`,
        compound,
        null,
        `could not create compound ${compoundName}`
      )
      .subscribe((data) => {
        if (data !== null) {
          this.router.navigate(['/compounds']);
        }
      });
  }
}
