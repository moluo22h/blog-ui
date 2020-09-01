import {Component, OnInit} from '@angular/core';
import {PublishService} from '../publish.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {


  // uploader: FileUploader = new FileUploader({
  //   url: 'http://localhost:9000',
  //   method: 'POST',
  //   itemAlias: '上传的apk包',
  // });
  content: string;

  constructor(private publishService: PublishService) {
  }

  ngOnInit() {
  }

  submit(value) {
    console.log(value);
    this.getFileContent(value);
  }

  getFileContent(path) {
    this.publishService.getFileContent(path).subscribe((data) => {
      this.content = data;
    });
  }

}
