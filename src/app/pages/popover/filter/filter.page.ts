import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
  @Input('filterOpts') filterOpts = [];
  // private selectedFilters = [];
  private selectedFilter: null;

  constructor(
    private popover: PopoverController
  ) { }

  ngOnInit() {
  }

  onChangeFilteropt(filterIndex) {
    this.selectedFilter = filterIndex;
  }

  onClickCancelFilter() {
    this.popover.dismiss(null);
  }

  onClickApplyFilter() {
    this.popover.dismiss(this.selectedFilter);
  }

}
