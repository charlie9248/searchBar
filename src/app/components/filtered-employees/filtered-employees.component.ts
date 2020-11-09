import { Component, OnInit , Input , OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-filtered-employees',
  templateUrl: './filtered-employees.component.html',
  styleUrls: ['./filtered-employees.component.css']
})
export class FilteredEmployeesComponent implements OnInit , OnChanges {
@Input() filteredEmployees;
@Input() valueWatcher;
  constructor() { }
 

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
   if(this.valueWatcher == 0){
     this.filteredEmployees = null;
   }
   
  }



}
