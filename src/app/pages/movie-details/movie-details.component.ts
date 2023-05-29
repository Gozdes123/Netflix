import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private movieApiServiceService: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}
  getMovieDetailResult: any;
  getMovieVideoResult: any;
  getMovieCastResult: any;
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovie(id: any) {
    this.movieApiServiceService.getMovieDetails(id).subscribe((result) => {
      this.getMovieDetailResult = result;
    });
  }

  getVideo(id: any) {
    this.movieApiServiceService.getMovieVideo(id).subscribe((result) => {
      console.log(result);
      result.results.forEach((element: any) => {
        if (element.type == 'Trailer') {
          this.getMovieVideoResult = element.key;
        }
      });
    });
  }

  getMovieCast(id: any) {
    this.movieApiServiceService.getMovieCast(id).subscribe((result) => {
      this.getMovieCastResult = result;
      this.getMovieCast = result.cast;
    });
  }
}
