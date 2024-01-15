import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  images: string[] = [
    '../../../../assets/img/CyanoGamer.png',
    '../../../../assets/img/CyanoClash.png',
    '../../../../assets/img/CyanoRoyal.png',
    '../../../../assets/img/CyanoMobileGame.png'
  ];
  ngOnInit(): void {
    // Set an interval to change the active slide every 2 seconds
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  nextSlide() {
    const currentIndex = this.images.indexOf(this.activeSlide);
    const nextIndex = (currentIndex + 1) % this.images.length;
    this.activeSlide = this.images[nextIndex];
  }

  // Initial active slide
  activeSlide: string = this.images[0];
}
