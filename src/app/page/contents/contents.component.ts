import { Component, OnInit } from '@angular/core';
import { content } from 'src/app/models/content.models';
import { ContentService } from './../../core/services/content/content.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  contents: Array<any> | undefined = [];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getContent().subscribe(content=> {
      content.forEach(content => this.contents!.push(content.data))
      console.log(this.contents)
    })
  }

}
