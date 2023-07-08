import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { API_URL } from 'src/app/config';
import { RequestService } from 'src/app/services/request.service';
import { Compound } from 'src/app/types/compound';

interface CompoundsResponse {
  data: Compound[];
  page: number;
  limit: number;
  totalPages: number;
  totalItems: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  compounds?: Compound[];

  page: number = 1;
  limit: number = 6;
  totalPages: number = 0;

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.queryParams.subscribe((params) => {
      this.page = parseInt(params['page']) || this.page;
      this.limit = parseInt(params['limit']) || this.limit;

      const compoundsObservable = this.requestService.get<CompoundsResponse>(
        `${API_URL}/compounds/?page=${this.page}&limit=${this.limit}`,
        {} as CompoundsResponse,
        "couldn't get compounds, try again later"
      );

      compoundsObservable.subscribe((compoundsResponse) => {
        this.compounds = compoundsResponse.data || [];
        this.totalPages = compoundsResponse.totalPages;
      });
    });
  }
}
