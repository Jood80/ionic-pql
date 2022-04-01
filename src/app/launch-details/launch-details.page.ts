import { Component, OnInit } from '@angular/core';
import {
  LaunchDetailsGQL,
  LaunchDetailsQuery,
} from 'src/app/services/spacexGraphql.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.page.html',
  styleUrls: ['./launch-details.page.scss'],
})
export class LaunchDetailsPage implements OnInit {
  launchDetails$: Observable<LaunchDetailsQuery['launch']>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchDetailsService: LaunchDetailsGQL
  ) {}

  ngOnInit() {
    this.launchDetails$ = this.route.paramMap.pipe(
      map((params) => params.get('id') as string),
      switchMap((id) => this.launchDetailsService.fetch({ id })),
      map((res) => res.data.launch)
    );
  }
}
