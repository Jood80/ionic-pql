import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  rates: any[];
  isLoading: true;
  error: any;
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql`
          {
            rates(currency: "USD") {
              currency
              rate
            }
          }
        `,
      })
      .valueChanges.subscribe((res: any) => {
        this.rates = res?.data?.rates;
        this.isLoading = res.loading;
        this.error = res.error;
      });
  }
}
