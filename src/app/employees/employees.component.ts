import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { Emp } from './emp';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  dt: Date = new Date(2021,4,6);
  object: Object = {
    foo: 'bar',
    baz: 'qux',
    nested: { xyz: 3, numbers: [1, 2, 3, 4, 5]}
  };
  objEmp: Employee = new Employee(0, '', '', 0);
  empList: Employee[] = [
    new Employee(1, 'jinal', 'shah', 0),
    new Employee(2, 'jinansh', 'shah', 12121)
  ];
  empListInterface: Emp[] = [
    { empFname: 'jinal', empLname: 'shah' },
    { empLname: 'jinal', empFname: 'shah' }
  ];
  constructor() { }

  ngOnInit(): void {
  }


  onRefreshClick(): void {
    this.empList = [
      new Employee(1, 'jinal', 'shah', 0),
      new Employee(2, 'jinansh', 'shah', 12121),
      new Employee(3, 'dhruti', 'shah', 213123)
    ];
  }
  ontodoDelete(item: Employee): void {
    this.empList.splice(this.empList.indexOf(item), 1);
    this.empList = this.empList.concat();
  }
  onEmpAdd(): void {
    this.empList = this.empList.concat(this.objEmp);
  }
  trackByEmpId(index: number, employee: any): string {
    console.log(employee.empId);
    return employee.empId;
  }
}
