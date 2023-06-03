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
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  scienceFictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  ngOnInit(): void {
    this.getBannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.scienceFictionMovie();
    this.scienceFictionMovie();
    this.thrillerMovie();
  }
  // 主畫面電影data
  getBannerData() {
    this.movieService.bannerApiData().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }

  // 追蹤電影的data
  trendingData() {
    this.movieService.trendingMovieApi().subscribe((result) => {
      this.trendingMovieResult = result.results;
    });
  }

  actionMovie() {
    this.movieService.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }

  adventureMovie() {
    this.movieService.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }

  animationMovie() {
    this.movieService.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }

  comedyMovie() {
    this.movieService.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  documentaryMovie() {
    this.movieService.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }

  scienceFictionMovie() {
    this.movieService.fetchScienceFictionMovies().subscribe((result) => {
      this.scienceFictionMovieResult = result.results;
    });
  }

  thrillerMovie() {
    this.movieService.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }
}
