import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrls: ['./pricing-card.component.scss']
})
export class PricingCardComponent implements OnInit {


  @Input() titre : string = "";
  @Input() prix : number  = 0;
  @Input() texte : string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
