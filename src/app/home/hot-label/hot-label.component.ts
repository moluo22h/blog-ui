import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hot-label',
  templateUrl: './hot-label.component.html',
  styleUrls: ['./hot-label.component.css']
})
export class HotLabelComponent implements OnInit {

  labels: string[] = ['css', 'java', 'pathon', 'go'];

  constructor() {
  }

  ngOnInit() {
  }

}
