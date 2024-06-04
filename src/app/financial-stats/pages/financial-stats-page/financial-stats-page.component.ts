import { Component, OnInit } from '@angular/core';
import { FinancialStatsService } from '../../services/financial-stats.service';
import { Income, Expense, Profitability } from '../../models/financial-data';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-financial-stats-page',
  templateUrl: './financial-stats-page.component.html',
  styleUrls: ['./financial-stats-page.component.css']
})

export class FinancialStatsPageComponent implements OnInit {
  type: string = 'income';
  categories: string[] = [];
  amount: any;
  description: any;
  date: any;
  period: any;

  formData: any[] = [];
  category: any;

  displayedColumns: string[] = ['type', 'category', 'description', 'amount', 'date', 'period'];
  filteredDataSource: any[] = [];
  dataSource: any[] = [];
  searchType: any;
  searchCategory: any;
  searchDate: any;
  searchCategories: string[] = [];


  ngOnInit(): void {
    this.updateCategories();
    this.updateSearchCategories();
  }

  updateCategories() {
    if (this.type === 'income') {
      this.categories = ['Sales', 'Subsidies', 'Other Income'];
    } else if (this.type === 'expense') {
      this.categories = ['Supplies', 'Labor', 'Maintenance', 'Services', 'Other Expenses'];
    }
  }

  updateSearchCategories() {
    if (this.searchType === 'income') {
      this.searchCategories = ['Sales', 'Subsidies', 'Other Income'];
    } else if (this.searchType === 'expense') {
      this.searchCategories = ['Supplies', 'Labor', 'Maintenance', 'Services', 'Other Expenses'];
    } else {
      this.searchCategories = [];
    }
  }



  onSubmit(form: NgForm) {
    const value = form.value;

    // create new data object
    const newData = {
      type: this.type,
      category: this.category,
      description: this.description,
      amount: value.amount,
      date: new Date(value.date),
      period: value.period
    };

    this.formData = [...this.formData, newData];
    this.dataSource = [...this.dataSource, newData]; // Add new data to dataSource

    // print new data to console
    console.log(this.formData);

    // reset the form
    form.reset();
  }

  filterData() {
    if (this.searchType === 'all') {
      this.filteredDataSource = this.dataSource;
    } else {
      this.filteredDataSource = this.dataSource.filter((item: any) => {
        return item.type === this.searchType &&
          (!this.searchCategory || item.category === this.searchCategory) &&
          (!this.searchDate || new Date(item.date) >= new Date(this.searchDate));
      });
    }
    console.log(this.filteredDataSource); // Print the filtered data to the console
  }

}
