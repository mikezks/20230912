import { Component } from '@angular/core';
import { injectBookingFeature } from '../../../+state/booking.state';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../ui/card.component';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-flight-search',
  imports: [
    CommonModule,
    FormsModule,
    CardComponent
  ],
  templateUrl: './search.component.html'
})
export class SearchComponent {
  from = 'Paris';
  to = 'London';
  basket: Record<number, boolean> = {
    3: true,
    5: true,
  };
  bookingFeature = injectBookingFeature();
}
