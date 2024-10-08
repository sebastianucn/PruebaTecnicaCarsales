import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodes: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEpisodes();
  }

  getEpisodes(): void {
    this.http.get<{ results: any[] }>('https://rickandmortyapi.com/api/episode')
      .subscribe(data => {
        this.episodes = data.results;
      });
  }
}
