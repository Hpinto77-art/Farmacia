import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-servicios',
  styleUrl: './servicios.css',
  templateUrl: './servicios.html',
})
export class Servicios {
  openSection = signal<number | null>(1);

  toggleSection(sectionId: number): void {
    if (this.openSection() === sectionId) {
      this.openSection.set(null); // Permite colapsar la sección si ya está abierta
    } else {
      this.openSection.set(sectionId);
    }
  }

  isOpen(sectionId: number): boolean {
    return this.openSection() === sectionId;
  }
}
