import { ChangeDetectorRef, Component, Input, VERSION } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userDetails: any = [];
  userNames: any = [];
  userNamesToSearch: any;
  imgSrc: any;
  userTitle: any;
  resultClicked: boolean = false;
  historyArr: any;
  historyClicked: boolean = false;
  searchvalue: any = '';
  searchstart: any = [];

  constructor(
    private apiService: ApiService,
    private changeDetector: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.historyArr = [];
    this.apiService.getUsers().subscribe((data) => {
      this.userDetails = data;

      this.userDetails.forEach((x: any) => {
        this.userNames.push(x.login);
      });
    });
  }

  clickResult(item: any) {
    this.resultClicked = true;
    this.imgSrc = item.avatar_url;
    this.userTitle = item.login;
    this.historyArr.push(this.userTitle);
    localStorage.setItem('historyArr', this.historyArr);

    this.searchvalue = item.login;
    this.searchstart = [];
  }
  historyResult(item) {
    this.searchvalue = '';
    const searchhistoryvalue = this.userDetails.filter((value) => {
      if (value.login.startsWith(item) == true) {
        value.login.startsWith(item);
        this.imgSrc = value.avatar_url;
        this.userTitle = value.login;
      }
    });

    this.changeDetector.detectChanges();
  }

  keyUpInput(e) {
    this.resultClicked = false;
    this.historyClicked = false;

    this.searchstart = this.userDetails.filter((value) =>
      value.login.startsWith(e)
    );

    this.changeDetector.detectChanges();
  }

  clickSubmit() {
    this.searchstart = this.userDetails.filter((value) =>
      value.login.startsWith(this.searchvalue)
    );
    this.searchstart = [];

    this.changeDetector.detectChanges();

    this.historyClicked = false;
  }

  clickHistory() {
    this.historyClicked = true;
    let data = localStorage.getItem('historyArr').split(',');
    this.searchvalue = '';
    this.historyArr = data;
  }
  closeSearch() {
    this.searchvalue = '';
  }
}
