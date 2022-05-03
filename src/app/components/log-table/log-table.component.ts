import { PostLogsService } from './../../services/post-logs.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { SelectionModel} from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Log{
  LogID: number,
  Application: string,
  ApplicationVersion: string,
  CustomerID: number,
  CompanyID: number,
  LogDateTime: string,
  LogContent: string,
  Notes: string
}

@Component({
  selector: 'log-table',
  templateUrl: './log-table.component.html',
  styleUrls: ['./log-table.component.css']
})
export class LogTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['LogID','Application', 'ApplicationVersion', 'CustomerID', 'CompanyID','LogDateTime','LogContent'];
  logList = new MatTableDataSource<Log>([]);
  selection = new SelectionModel<Log>(true, []);
  
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  constructor(private service: PostLogsService) { }

  ngOnInit(): void {
    this.fetchLogs();
  }

  ngAfterViewInit(): void {  
    this.logList.sort = this.sort;
    this.logList.paginator = this.paginator;
   }

  fetchLogs(): void {
    this.service.getLogs().subscribe((data) => {
      this.logList.data = data as Log[];
    });
  }

  //FILTER
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.logList.filter = filterValue.trim().toLowerCase();

    if (this.logList.paginator) {
      this.logList.paginator.firstPage();
    }
  }

  //SELECT 
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.logList.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.logList.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Log): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.LogID + 1}`;
  }


}
