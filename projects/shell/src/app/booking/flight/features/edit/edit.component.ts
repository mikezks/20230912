import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { injectBookingFeature } from '../../../+state/booking.state';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-flight-edit',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit.component.html'
})
export class EditComponent {
  editForm = inject(NonNullableFormBuilder).group({
    id: [0],
    from: [''],
    to: [''],
    date: [new Date().toISOString()],
    delayed: [false]
  });
  #bookingFeature = injectBookingFeature();

  save(): void {
    this.#bookingFeature.save(this.editForm.getRawValue());
  }
}
