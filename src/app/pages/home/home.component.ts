import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private movieService: MovieApiServiceService) {}
  bannerResult: any = [];
  trendingMovieResult: any = [];
  ngOnInit(): void {
    this.getBannerData();
    this.trendingData();
  }
  // 主畫面電影data
  getBannerData() {
    this.movieService.bannerApiData().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }

  trendingData() {
    this.movieService.trendingMovieApi().subscribe((result) => {
      this.trendingMovieResult = result.results;
    });
  }
}
