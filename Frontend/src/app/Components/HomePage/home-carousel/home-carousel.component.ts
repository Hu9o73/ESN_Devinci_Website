import { Component } from '@angular/core';
import { HomeCarouselCardComponent } from '../home-carousel-card/home-carousel-card.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environments';

export interface Card {
  id: number;
  imageLink: string;
  title: string;
  category: string;
  description: string;
  author: number;
}

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CommonModule, HomeCarouselCardComponent],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.css',
})
export class HomeCarouselComponent {
  cards: Card[] = [];
  authorNames: { [authorId: number]: string } = {}; // Store the author names by id

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchEvents();
  }

  fetchEvents() {
    this.http.get<Card[]>(`${environment.apiUrl}/getEvents`).subscribe(
      (data) => {
        this.cards = data;
        this.fetchAllAuthors();
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }

  fetchAllAuthors() {
    // Collect all unique author IDs. Runs once, to avoid loop on component change (seemed to happen way to often for the carousel...)
    const authorIds = [...new Set(this.cards.map((card) => card.author))];
    console.log(authorIds);
    authorIds.forEach((authorId) => {
      this.http
        .get<{ firstName: string }>(
          `${environment.apiUrl}/user/${authorId}/firstName`
        )
        .subscribe(
          (response) => {
            this.authorNames[authorId] = response.firstName;
          },
          (error) => {
            console.error('Error fetching author first name:', error);
            this.authorNames[authorId] = 'Unknown'; // Default to 'Unknown' if there's an error
          }
        );
    });
  }

  // Divide the cards in group of 3
  getCarouselGroups(): Card[][] {
    const chunkSize = 3;
    const groups: Card[][] = [];
    const orderedCards = [...this.cards].reverse();

    for (let i = 0; i < orderedCards.length; i += chunkSize) {
      groups.push(orderedCards.slice(i, i + chunkSize));
    }

    return groups;
  }

  generatePlaceholders(count: number): string[] {
    return Array(count).fill('');
  }
}
