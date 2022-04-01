import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  PastLaunchesListGQL,
  PastLaunchesListQuery,
} from '../services/spacexGraphql.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.page.html',
  styleUrls: ['./launch-list.page.scss'],
})
export class LaunchListPage implements OnInit {
  pastLaunches$: Observable<PastLaunchesListQuery['launchesPast']>;

  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(private pastLaunchesService: PastLaunchesListGQL) {
    this.pastLaunches$ = pastLaunchesService
      .fetch({ limit: 30 })
      .pipe(map((res) => res.data.launchesPast));
  }
  ngOnInit() {}
}
