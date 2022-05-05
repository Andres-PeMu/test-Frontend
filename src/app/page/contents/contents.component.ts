import { Component, OnInit } from '@angular/core'
import { ContentService } from './../../core/services/content/content.service';


@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  contents: Array<any> | undefined = [];
  selectedValue: string | undefined;
  contentNew: Array<any> | undefined = [];
  content: boolean = false;
  date: Date = new Date();


  constructor(
    private contentService: ContentService
    ) {
    }

  ngOnInit(): void {
    this.contentService.getContent().subscribe(content=> {
      content.forEach(content => this.contents!.push(content.data))
      this.date = new Date()
      this.contents = this.contents?.filter(content => this.date < new Date(content.finisDate))
    })
  }

  states = [
    {name: 'Todas', abbreviation: 'tdas'},
    {name: 'Deporte', abbreviation: 'Dte'},
    {name: 'Musica', abbreviation: 'Mca'},
    {name: 'Tecnologia', abbreviation: 'Tgia'},
    {name: 'Peliculas', abbreviation: 'Plas'},
    {name: 'Noticias', abbreviation: 'Ncias'},
  ];

    SelectCategory(event:Event){
     console.log(event)
     switch (event.toString()) {
        case 'Deporte':
          this.contentNew = this.contents?.filter(content => event === content.state)
          console.log(this.contentNew)
          this.content = true
          break;
        case 'Musica':
          this.contentNew = this.contents?.filter(content => event === content.state)
          console.log(this.contentNew)
          this.content = true
          break;
         case 'Tecnologia':
          this.contentNew = this.contents?.filter(content => event === content.state)
          console.log(this.contentNew)
          this.content = true
          break;
        case 'Peliculas':
          this.contentNew = this.contents?.filter(content => event === content.state)
          console.log(this.contentNew)
          this.content = true
          break;
        case 'Noticias':
          this.contentNew = this.contents?.filter(content => event === content.state)
          console.log(this.contentNew)
          this.content = true
          break;
        default:
          this.content = false
          break;
      }
    }

}
