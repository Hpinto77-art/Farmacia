import { Component } from '@angular/core';
import { OnInit, OnDestroy, signal } from '@angular/core';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

@Component({
  imports: [],
  selector: 'app-carrusel',
  styleUrl: './carrusel.css',
  templateUrl: './carrusel.html',
})
export class Carrusel implements OnInit, OnDestroy {
  slides1: Slide[] = [
    {
      id: 0,
      image: '/Analgesicos/Acetaminofen.jpg',
      title: 'Analgesicos',
      description: 'Medicamentos e insumos médicos garantizados.',
    },
    {
      id: 1,
      image: '/Analgesicos/Aleve.jpg',
      title: 'Analgesicos',
      description: 'Refuerza tu sistema inmune todos los días.',
    },
    {
      id: 2,
      image: '/Analgesicos/Diclofenac.jpg',
      title: 'Analgesicos',
      description: 'Fórmulas y productos suaves para bebés.',
    },
  ];

  // Carrusel 2: Ofertas y Descuentos
  slides2: Slide[] = [
    {
      id: 0,
      image: '/Antibioticos/Mexapin.jpg',
      title: 'Antibioticos',
      description: 'Antibioticos',
    },
    {
      id: 0,
      image: '/Antibioticos/Dipirona 25mg.jpg',
      title: 'Antibioticos',
      description: 'Antibioticos',
    },
    {
      id: 0,
      image: '/Antibioticos/Novalgina 500mg.jpg',
      title: 'Antibioticos',
      description: 'Antibioticos',
    },
  ];

  // Carrusel 3: Servicios y Domicilios
  slides3: Slide[] = [
    {
      id: 0,
      image:
        'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
      title: 'Envíos Express',
      description: 'Entrega a domicilio en menos de 45 minutos.',
    },
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
      title: 'Inyectología & Toma de Presión',
      description: 'Atención farmacéutica profesional en sede.',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop',
      title: 'Asesoría Virtual 24/7',
      description: 'Consulta disponibilidad de fórmulas por WhatsApp.',
    },
  ];

  // ------------------------------------------------------------------
  // 2. ESTADOS INDEPENDIENTES (SEÑALES)
  // ------------------------------------------------------------------
  activeSlide1 = signal<number>(0);
  activeSlide2 = signal<number>(0);
  activeSlide3 = signal<number>(0);

  private autoSlideInterval: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  // ------------------------------------------------------------------
  // 3. MÉTODOS DE NAVEGACIÓN GENÉRICOS
  // ------------------------------------------------------------------

  nextSlide(carouselNumber: 1 | 2 | 3): void {
    if (carouselNumber === 1) {
      this.activeSlide1.update((curr) => (curr + 1) % this.slides1.length);
    } else if (carouselNumber === 2) {
      this.activeSlide2.update((curr) => (curr + 1) % this.slides2.length);
    } else if (carouselNumber === 3) {
      this.activeSlide3.update((curr) => (curr + 1) % this.slides3.length);
    }
  }

  prevSlide(carouselNumber: 1 | 2 | 3): void {
    if (carouselNumber === 1) {
      this.activeSlide1.update((curr) => (curr - 1 + this.slides1.length) % this.slides1.length);
    } else if (carouselNumber === 2) {
      this.activeSlide2.update((curr) => (curr - 1 + this.slides2.length) % this.slides2.length);
    } else if (carouselNumber === 3) {
      this.activeSlide3.update((curr) => (curr - 1 + this.slides3.length) % this.slides3.length);
    }
  }

  goToSlide(carouselNumber: 1 | 2 | 3, index: number): void {
    if (carouselNumber === 1) this.activeSlide1.set(index);
    if (carouselNumber === 2) this.activeSlide2.set(index);
    if (carouselNumber === 3) this.activeSlide3.set(index);
    this.resetAutoSlide();
  }

  // ------------------------------------------------------------------
  // 4. TEMPORIZADOR AUTOMÁTICO
  // ------------------------------------------------------------------
  private startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide(1);
      this.nextSlide(2);
      this.nextSlide(3);
    }, 5000);
  }

  private stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  resetAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
