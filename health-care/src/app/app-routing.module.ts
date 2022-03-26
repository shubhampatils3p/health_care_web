import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientEnrollmentComponent } from './patient-enrollment/patient-enrollment.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

const routes: Routes = [
  { path: 'patient-enroll', component: PatientEnrollmentComponent },
  { path: 'patient-profile', component: PatientProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
