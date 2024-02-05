import { Component } from '@angular/core';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrl: './new-appointment.component.scss',
})
export class NewAppointmentComponent {
  appointmentObj: any = {
    name: '',
    mobileNo: '',
    city: '',
    age: 0,
    gender: '',
    appointmentDate: '2024-01-09T20:59:58.327Z',
    appointmentTime: '',
    isFirstVisit: true,
    naration: '',
  };

  constructor(private master: MasterService) {}

  onSaveAppointment() {
    console.log(this.appointmentObj);
    this.master.createNew(this.appointmentObj).subscribe(
      (res: any) => {
        if (res.result) {
          alert('Appointment Done & Appointment No is -' + res.data.appointmentNo);
        }
      },
      (error) => {
       alert('Api Error/ check Form');
      }
    );
  }
}
