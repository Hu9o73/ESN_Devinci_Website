import { Component } from '@angular/core';
import { HomeCarouselCardComponent } from '../home-carousel-card/home-carousel-card.component';
import { CommonModule } from '@angular/common';

export interface Card {
  image: string;
  title: string;
  category: string;
  description: string;
  authorImage: string;
  authorName: string;
}

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [
    CommonModule,
    HomeCarouselCardComponent
  ],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.css'
})


export class HomeCarouselComponent {
  
  // Mock Data (will be fetched from a DB later...)
  cards: Card[] = [
    {
      image: 'https://i.ibb.co/ccnrc03/chillbar-ESN.jpg',
      title: 'Chill Bar',
      category: 'Bar',
      description: 'Join us for a relaxed evening with ESN and our friends…. @devincitrip ! We’re waiting for you on our beautiful terrace for a night of sharing and fun. Come as you are, good vibes guaranteed! 🎉✨',
      authorImage: 'LogoPack/ESN_Star/ESNstar_digital_darkblue.png',
      authorName: 'Hugo B.',
    },
    {
      image: 'https://i.ibb.co/x2T228w/goodbye-Dinner.jpg',
      title: 'Goodbye Dinner',
      category: 'Dinner',
      description: 'Lombard! 🍽️ Join us for one last memorable evening in this cozy spot in the heart of Paris! Let’s share precious moments, laughter, and memories over delicious flammekueches! 🎉✨',
      authorImage: 'LogoPack/ESN_Star/ESNstar_digital_darkblue.png',
      authorName: 'Hugo B.',
    },
    {
      image: 'https://i.ibb.co/cckF4F7/Christmas-CDL.jpg',
      title: 'Christmas CDL',
      category: 'CDL',
      description: 'Magical Evening! 🌟 Get ready for the most festive evening of the year! Join us for a celebration filled with joy, great company, and unforgettable moments! On the program: gingerbread cookie decorating, Christmas music blind test, and gift exchange! 🎅🍪 🍷 Warm atmosphere, delicious drinks, and plenty of Christmas surprises await you! Come create magical memories with us! ❄️❄️',
      authorImage: 'LogoPack/ESN_Star/ESNstar_digital_darkblue.png',
      authorName: 'Hugo B.',
    },
    {
      image: 'https://i.ibb.co/xsyg2Zy/Farewell-Dinner.jpg',
      title: 'Farewell Dinner',
      category: 'School Event',
      description: 'For some of you, the last few days of your French journey are coming 🥺 Join us for a heartwarming farewell dinner as we say goodbye to our amazing international students who have enriched our community for a semester and brought us so much joy! 🌍✨ Let’s gather one last time to to celebrate the memories, friendships, and cultural exchange that have made this experience truly unforgettable 🎉🌟. @poletechpulv will be here to immortalize this moment with us with a photo-booth 📷.',
      authorImage: 'LogoPack/ESN_Star/ESNstar_digital_darkblue.png',
      authorName: 'Hugo B.',
    },
    {
      image: 'https://i.ibb.co/4RhhFHz/CDLBoard.jpg',
      title: 'CDL Board Games',
      category: 'CDL',
      description: 'Need a relaxing break? Join us for a fun and friendly board games session! ✨ It’s the perfect opportunity to unwind 🤗 and share a great time with international students. 🎯 During these stressful exam times, take a moment to breathe and clear your mind with locals and fellow internationals in a chill atmosphere. 🌍🎲✨',
      authorImage: 'LogoPack/ESN_Star/ESNstar_digital_darkblue.png',
      authorName: 'Hugo B.',
    }
  ];

  // Divide the cards in group of 3
  getCarouselGroups(): Card[][] {
    const chunkSize = 3;
    const groups: Card[][] = [];

    for (let i = 0; i < this.cards.length; i += chunkSize) {
      groups.push(this.cards.slice(i, i + chunkSize));
    }

    return groups;
  }

  generatePlaceholders(count: number): string[] {
    return Array(count).fill('');
  }
}
