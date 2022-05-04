import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cotent-detail',
  templateUrl: './cotent-detail.component.html',
  styleUrls: ['./cotent-detail.component.scss']
})
export class CotentDetailComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
