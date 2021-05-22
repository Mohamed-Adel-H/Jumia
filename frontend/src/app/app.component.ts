import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {CustomerService} from "./customer.service";
import {Customer} from "./model/customer";
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, tap} from "rxjs/operators";


interface Pageable {
  page: number;
  size: number;
  sort: string;
  country?: string;
  state?: any;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['id', 'name', 'countryCode', 'state'];
  dataSource: MatTableDataSource<Customer>;
  totalSize = 0;
  pageSize = 5;
  pageable: Pageable = {
    page: 0,
    size: 5,
    sort: 'id,asc'
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('countryFilter') countryFilter: ElementRef;


  constructor(private customerService: CustomerService) {
    this.fetchCustomerData();
  }

  ngOnInit(): void {
    this.customerService.getGatewayDevices(this.pageable).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data.customers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.totalSize = data.totalItems;
    })
  }

  ngAfterViewInit(): void {
    this.applyCountryFilter();
  }

  applyCountryFilter() {
    fromEvent(this.countryFilter.nativeElement, 'keyup').pipe(
      filter(Boolean),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => {
        this.pageable.country = this.countryFilter.nativeElement.value
        this.fetchCustomerData()
      })
    ).subscribe();

  }

  updatePage(pageEvent: PageEvent) {
    this.pageable.page = pageEvent.pageIndex;
    this.pageable.size = pageEvent.pageSize;
    this.fetchCustomerData();
  }

  applySort(sort: Sort) {
    this.pageable.sort = sort.active + "," + sort.direction;
    this.fetchCustomerData();
  }

  fetchCustomerData(): void {
    this.customerService.getGatewayDevices(this.pageable).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data.customers);
      this.totalSize = data.totalItems;
    })
  }

  stateChange(value: string) {
    if (value === "true") {
      this.pageable.state = true;
    } else if (value === "false") {
      this.pageable.state = false;
    } else {
      this.pageable.state = null;
    }
    this.fetchCustomerData();
  }
}
