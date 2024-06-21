import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

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
  searchResults: any[] = [];
  searchType: any = 'all';
  searchCategory: any;
  searchDate: any;
  searchCategories: string[] = [];


  ngOnInit(): void {
    this.updateCategories();
    this.updateSearchCategories();
    this.updateFilteredDataSource(); // Initial filter to populate the filteredDataSource with the last 11 entries
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

    // Insert the new data at the beginning of the arrays
    this.formData = [newData, ...this.formData];
    this.dataSource = [newData, ...this.dataSource]; // Add new data to dataSource

    // print new data to console
    console.log(this.formData);

    // reset the form
    form.resetForm({ type: this.type }); // Reset form with default type

    // Update filteredDataSource to include the new entry
    this.updateFilteredDataSource();
  }

  updateFilteredDataSource() {
    // Slice the last 11 entries from the top
    this.filteredDataSource = this.dataSource.slice(0, 11);
    console.log(this.filteredDataSource); // Print the filtered data to the console
  }
  filterData() {
    let filteredData = this.dataSource;

    if (this.searchType && this.searchType === 'all') {
      // If 'all' is selected, ignore other filters and reset to full dataSource
      this.searchResults = filteredData;
    } else {
      if (this.searchType && this.searchType !== 'all') {
        filteredData = filteredData.filter((item: any) => item.type === this.searchType);
      }

      if (this.searchCategory) {
        filteredData = filteredData.filter((item: any) => item.category === this.searchCategory);
      }

      if (this.searchDate) {
        filteredData = filteredData.filter((item: any) => new Date(item.date) >= new Date(this.searchDate));
      }

      this.searchResults = filteredData;
    }

    console.log(this.searchResults); // Print the search results to the console
  }
}
