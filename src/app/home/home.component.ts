import { Component, OnInit } from '@angular/core';
import myURLS  from './../../assets/urls.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  index: number = 0;
  introVideo: string = 'XiS224hhL30';
  videoIds: string[] = [];
  videoId: string;
  givenPassword: boolean;
  displayMode: string = '';

  ngOnInit() {

    for (let i = 0; i < myURLS.Results.length; i++) {
      this.videoIds.push(myURLS.Results[i].URL.split('embed/')[1]);
    }
    console.log(myURLS.Results);
    this.nextVideo();
  }

  constructor(private http: HttpClient) {
    console.log('constructor');
    this.videoId = this.videoIds[this.index];
    this.givenPassword = false;
    this.getJSON().subscribe((data) => {
      console.log(data);
    });
    console.log('after getJSON()');
  }

  public getJSON(): Observable<any> {
    console.log('calling getJSON');
    return this.http.get('./../../assets/database.json');
  }

  changeVideo(summand: number) {
    this.index = this.index + summand;
    this.videoId = this.videoIds[this.index];
  }


  nextVideo() {
    console.log('Clicked Button nextVideo');
    this.index++;
    this.index = this.index % this.videoIds.length;
    this.videoId = this.videoIds[this.index];
  }

  previousVideo() {
    console.log('clicked button previousVideo');
    this.index = (this.index + this.videoIds.length - 1) % this.videoIds.length;
    this.videoId = this.videoIds[this.index];
    console.log(this.index);
  }
}
