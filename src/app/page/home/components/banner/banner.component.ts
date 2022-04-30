import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images:string[] = [
    '../../../assets/image/banner/banner-films.png',
    '../../../assets/image/banner/banner-music.png',
    '../../../assets/image/banner/banner-news.png',
    '../../../assets/image/banner/banner-sports.jpg',
    '../../../assets/image/banner/banner-technology.png',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
