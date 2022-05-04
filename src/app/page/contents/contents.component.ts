import { Component, OnInit } from '@angular/core'
import { ContentService } from './../../core/services/content/content.service';

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
