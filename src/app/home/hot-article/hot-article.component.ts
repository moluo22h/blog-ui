import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hot-article',
  templateUrl: './hot-article.component.html',
  styleUrls: ['./hot-article.component.css']
})
export class HotArticleComponent implements OnInit {

  articles: string[] = [
    'cccsssss',
    'cccsssss',
    'cccsssss',
    'cccsssss'
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
