import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-carousel-card',
  standalone: true,
  imports: [],
  templateUrl: './home-carousel-card.component.html',
  styleUrl: './home-carousel-card.component.css',
})
export class HomeCarouselCardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() category!: string;
  @Input() description!: string;
  @Input() authorImage!: string;
  @Input() authorName!: string;
}
