import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthenticationService } from "../../../register/services/authentication.service";

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

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  private getAuthHeaders(): Observable<HttpHeaders> {
    return this.authService.getToken().pipe(
      map(token => {
        console.log('Token de autenticación:', token);
        return new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        });
      })
    );
  }

  ngOnInit(): void {
    this.updateCategories();
    this.updateSearchCategories();
    this.updateFilteredDataSource(); // Initial filter to populate the filteredDataSource with the last 11 entries
  }

  updateCategories() {
    if (this.type === 'income') {
      this.categories = ['SALES', 'SUBSIDES', 'OTHER'];
    } else if (this.type === 'expense') {
      this.categories = ['Supplies', 'Labor', 'Maintenance', 'Services', 'Other Expenses'];
    }
  }

  updateSearchCategories() {
    if (this.searchType === 'income') {
      this.searchCategories = ['SALES', 'SUBSIDES', 'OTHER'];
    } else if (this.searchType === 'expense') {
      this.searchCategories = ['Supplies', 'Labor', 'Maintenance', 'Services', 'Other Expenses'];
    } else {
      this.searchCategories = [];
    }
  }

  onSubmit(form: NgForm) {
    const value = form.value;

    // create new data object with the specified format
    const newData = {
      category: this.category.toUpperCase(), // Ensuring category is uppercase
      description: this.description,
      amount: value.amount,
      date: new Date(value.date).toISOString().split('T')[0], // Format date as YYYY-MM-DD
      period: value.period
    };

    // Insert the new data at the beginning of the arrays
    this.formData = [newData, ...this.formData];
    this.dataSource = [newData, ...this.dataSource]; // Add new data to dataSource

    // Send new data to server
    this.saveData(newData);

    // print new data to console
    console.log('Data added to formData and dataSource:', newData);

    // reset the form
    form.resetForm({ type: this.type }); // Reset form with default type

    // Update filteredDataSource to include the new entry
    this.updateFilteredDataSource();
  }

  saveData(data: any) {
    let url = `${environment.serverBasePath}/expense`;
    if (this.type === 'income') {
      url = `${environment.serverBasePath}/income`;
    }

    console.log('Data being sent to server:', data); // Log the data being sent

    this.getAuthHeaders().subscribe(headers => {
      this.http.post(url, data, { headers }).subscribe(response => {
        console.log('Data saved successfully:', response);
      }, error => {
        console.error('Error saving data:', error);
      });
    });
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
