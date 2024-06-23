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
  userId: string; // Añadir identificador de usuario
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
  searchType: string = 'income';
  searchCategory: any;
  searchCategories: string[] = [];

  totalIncome: number = 0;
  totalExpense: number = 0;
  balance: number = 0;

  constructor(private http: HttpClient, private authService: AuthenticationService) {
    // Supongamos que el servicio de autenticación puede proporcionar el userId
    this.userId = this.authService.getIdSignIn();
  }

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
    this.loadInitialData();
  }

  updateCategories() {
    if (this.type === 'income') {
      this.categories = ['SALES', 'SUBSIDES', 'OTHER'];
    } else if (this.type === 'expense') {
      this.categories = ['SUPPLIES', 'LABOR', 'MAINTENANCE', 'SERVICES', 'OTHER'];
    }
  }

  updateSearchCategories() {
    if (this.searchType === 'income') {
      this.searchCategories = ['SALES', 'SUBSIDES', 'OTHER'];
    } else if (this.searchType === 'expense') {
      this.searchCategories = ['SUPPLIES', 'LABOR', 'MAINTENANCE', 'SERVICES', 'OTHER'];
    } else {
      this.searchCategories = [];
    }
  }

  onSubmit(form: NgForm) {
    const value = form.value;

    // create new data object with the specified format
    const newData = {
      userId: this.userId, // Añadir identificador de usuario
      type: this.type.toUpperCase(), // Ensure type is uppercase
      category: this.category.toUpperCase(), // Ensuring category is uppercase
      description: this.description,
      amount: value.amount,
      date: new Date(value.date).toISOString().split('T')[0], // Format date as YYYY-MM-DD
      period: value.period.toUpperCase() // Ensure period is uppercase
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
    this.calculateTotals();
  }

  saveData(data: any) {
    let url = `${environment.serverBasePath}/expense`;
    if (data.type === 'INCOME') {
      url = `${environment.serverBasePath}/income`;
    }

    console.log('Data being sent to server:', data); // Log the data being sent

    this.getAuthHeaders().subscribe(headers => {
      this.http.post(url, data, { headers }).subscribe(response => {
        console.log('Data saved successfully:', response);
        this.loadInitialData(); // Load data again to update statistics
      }, error => {
        console.error('Error saving data:', error);
      });
    });
  }

  loadInitialData() {
    this.getAuthHeaders().subscribe(headers => {
      this.http.get(`${environment.serverBasePath}/data/${this.userId}`, { headers }).subscribe((data: any) => {
        this.dataSource = data;
        this.updateFilteredDataSource();
        this.calculateTotals();
      }, error => {
        console.error('Error loading data:', error);
      });
    });
  }

  updateFilteredDataSource() {
    // Slice the last 11 entries from the top
    this.filteredDataSource = this.dataSource.slice(0, 11);
    console.log(this.filteredDataSource); // Print the filtered data to the console
  }

  filterData() {
    let url = `${environment.serverBasePath}/expense/filter/all`;
    if (this.searchType.toUpperCase() === 'INCOME') {
      url = `${environment.serverBasePath}/income/filter/all`;
    }

    this.getAuthHeaders().subscribe(headers => {
      this.http.get(url, { headers }).subscribe((data: any) => {
        // Set the type for each item
        data = data.map((item: any) => ({
          ...item,
          type: this.searchType.toUpperCase() // Ensure type is uppercase
        }));

        let filteredData = data;

        if (this.searchCategory) {
          filteredData = filteredData.filter((item: any) => item.category === this.searchCategory.toUpperCase());
        }

        this.searchResults = filteredData;

        console.log('Filtered data:', this.searchResults); // Print the search results to the console
        this.calculateTotals();
      }, error => {
        console.error('Error fetching filtered data:', error);
      });
    });
  }

  calculateTotals() {
    this.totalIncome = this.dataSource
      .filter(item => item.type === 'INCOME')
      .reduce((acc, curr) => acc + curr.amount, 0);

    this.totalExpense = this.dataSource
      .filter(item => item.type === 'EXPENSE')
      .reduce((acc, curr) => acc + curr.amount, 0);

    this.balance = this.totalIncome - this.totalExpense;
  }
}
