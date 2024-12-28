import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-carousel-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-carousel-card.component.html',
  styleUrl: './home-carousel-card.component.css',
})
export class HomeCarouselCardComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() category!: string;
  @Input() description!: string;
  @Input() authorName!: string;
  @Input() image!: string;
  
  constructor() { }


}
