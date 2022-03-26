import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-enrollment',
  templateUrl: './patient-enrollment.component.html',
  styleUrls: ['./patient-enrollment.component.scss'],
})
export class PatientEnrollmentComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern(/\d/)]],
      gender: ['', Validators.required],
      weight: ['', Validators.pattern(/\d/)],
      phone: ['', [Validators.required, Validators.pattern(/\d/)]],
      profile_pic: [''],
      medical_history:['']
    });
  }

  ngOnInit() {}

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    const patientInfo = this.registerForm.value;
    localStorage.setItem('patientInfo', JSON.stringify(patientInfo))
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
