import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss'],
})
export class PatientProfileComponent implements OnInit {
  patientInfo: any;
  constructor() {
    this.patientInfo = localStorage.getItem('patientInfo');
    if (this.patientInfo) {
      this.patientInfo = JSON.parse(this.patientInfo)
    }
  }

  ngOnInit(): void {}
}
