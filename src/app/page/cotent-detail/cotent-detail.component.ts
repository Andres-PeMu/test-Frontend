import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContentService } from './../../core/services/content/content.service';
import { content } from './../../models/content.models';

@Component({
  selector: 'app-cotent-detail',
  templateUrl: './cotent-detail.component.html',
  styleUrls: ['./cotent-detail.component.scss']
})
export class CotentDetailComponent implements OnInit {

  contents: Array<any> | undefined = [];
  content: content | undefined;

  constructor(
    private route:ActivatedRoute,
    private contentService:ContentService
  ) { }

  ngOnInit(): void {
    this.contentService.getContent().subscribe(content=> {
      content.forEach(content => this.contents!.push(content.data))
      this.route.params.subscribe((params: Params)=>{
        const id = params['id'];
        this.content = this.contents?.find(content => id === content.id)
      })
    })
  }

  states = [
    {name: 'Deporte', abbreviation: 'Dte'},
    {name: 'Musica', abbreviation: 'Mca'},
    {name: 'Tecnologia', abbreviation: 'Tgia'},
    {name: 'Peliculas', abbreviation: 'Plas'},
    {name: 'Noticias', abbreviation: 'Ncias'},
  ];

}
