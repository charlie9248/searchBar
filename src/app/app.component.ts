import { Component , OnInit } from '@angular/core';
import {Employee} from '../models/employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  employees : Employee[];
  filteredEmployees : Employee[];
  firstname : String;
  valueWatcher : number;


  constructor(){}


  ngOnInit() {
    // ...
    this.employees = [
      {
        firstname : 'Mothibeli',
        lastname : 'Rapuleng',
        department : 'Information Tecnology'
      },
      {
        firstname : 'Thabo',
        lastname : 'Baitsumedi',
        department : 'Information Tecnology'
      },
      {
        firstname : 'Post ',
        lastname : 'Mofokeng',
        department : 'Human Resource'
      },
      {
        firstname : 'Moshe',
        lastname : 'Matjelo',
        department : 'Operations'
      },
      {
        firstname : 'Tshepo',
        lastname : 'Sibeko',
        department : 'Office Management'
      },
      {
        firstname : 'Tshediso',
        lastname : 'Ramohlokoane',
        department : 'Information Tecnology'
      },
    ]
  }


  searchByFirstName(event){

    if(event.target.value == 0){
      this.valueWatcher = 0;
      this.ngOnInit();
    }
    else{
      this.valueWatcher = 1;
    }
    this.filteredEmployees = this.employees.filter(getName =>{
      return getName.firstname.toLocaleLowerCase().startsWith(this.firstname.toLocaleLowerCase())
    });
    
  }
}
