import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Trip {
  start: string;
  end: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trip-maker3';

  trips: Trip[] = [];
  newTrip: Trip = { start: '', end: '' };

  addTrip() {
    if (this.newTrip.start && this.newTrip.end) {
      this.trips.push({ ...this.newTrip });
      this.newTrip = { start: '', end: '' };
    }
  }

  getTripCode(trip: Trip): string {
    return `${trip.start.slice(0, 3).toUpperCase()} - ${trip.end.slice(0, 3).toUpperCase()}`;
  }

  isConnected(index: number): boolean {
    if (index === 0) return false;
    return this.trips[index - 1].end === this.trips[index].start;
  }

  isSameTrip(index: number): boolean {
    if (index === 0) return false;
    const prev = this.trips[index - 1];
    const curr = this.trips[index];
    return prev.start === curr.start && prev.end === curr.end;
  }
}
