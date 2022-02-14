import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(public ordersService: PolicyService) { }

  ngOnInit() { this.getZtsForms(); }

  ztsForms;
  getZtsForms = () =>
    this.ordersService
      .getZtsForms()
      .subscribe(res => (this.ztsForms = res));

  headElements = ['First Name', 'Middle Name', 'Last Name', 'Email', 'Address One',
    'City', 'State', 'Country', 'Church Leadership', 'English Proficiency', 'Other Language', 'Phone Number', 'Gender', 'Ethnic Detail', 'Ethnic',
    'Occupation', 'Marital Status', 'Special Accomidations', 'Special Accomidations Explain', 
    'Previous Conviction', 'Previous Convication Explain', 'Date of Birth', 'Address Two', 'Denomnination', 'Church Name', 'Church Size', 'Church Role', 'Country Two', 'Statement Purpose', 'Attendance Length',
    'Church Location', 'InternetAccess', 'Refference Point', 'Anyone Studying Now', 'Date Submitted','Years of being a believer', 'Country Citizenship'];
}
