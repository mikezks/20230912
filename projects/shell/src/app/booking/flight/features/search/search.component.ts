import { AsyncPipe, DatePipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, DestroyRef, Injector, OnInit, Signal, computed, effect, inject, signal, untracked } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { injectBookingFeature } from '../../../+state/booking.state';
import { CardComponent } from '../../ui/card.component';
import { Flight } from '../../logic/model/flight';
import { debounceTime } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [
    NgIf, NgFor, DatePipe, JsonPipe, AsyncPipe,
    RouterLink,
    FormsModule,
    CardComponent
  ],
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  from = signal('Paris');
  to = signal('London');
  basket: Record<number, boolean> = {
    3: true,
    5: true,
  };
  bookingFeature = injectBookingFeature();
  flightRoute = computed(() => 'From ' + this.from() + ' to ' + this.to() + '.');
  flightSignalFromObservable: Signal<Flight[]> = toSignal(this.bookingFeature.flights$, {
    initialValue: []
  });
  flightSignalFromObservable2: Signal<Flight[]> = toSignal(this.bookingFeature.flights$, {
    requireSync: true
  });
  flightRouteRelaxed$ = toObservable(this.flightRoute).pipe(
    debounceTime(300)
  );
  injector = inject(Injector);
  destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => console.log(this.from(), untracked(() => this.to())));
    this.injector.get(Store);
  }

  ngOnInit() {
    this.injector.get(Store);
    /* effect(() => console.log(this.from(), this.to()), {
      injector: this.injector
    }); */

    this.destroyRef.onDestroy(() => console.log('Bye, bye!'));
  }
}
