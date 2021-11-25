import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  constructor() { }
  cardList = [
    {
      cardImageSrc:"assets/images/angular_logo.png",cardAlt:"Angular",cardTitle:"Angular",cardText:"Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations."
    },
    {
      cardImageSrc:"assets/images/CSS3_logo.png",cardAlt:"CSS3",cardTitle:"Cascaded Style Sheets (CSS)",cardText:"Cascaded Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.["
    },
    {
      cardImageSrc:"assets/images/HTML5_logo.png",cardAlt:"HTML5",cardTitle:"Hypertext Markup Language (HTML5)",cardText:"Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
      cardImageSrc:"assets/images/JavaScript_logo.png",cardAlt:"JS",cardTitle:"JavaScript",cardText:"JavaScript"
    },
    {
      cardImageSrc:"assets/images/microsoft_sql_server_logo.jpg",cardAlt:"MSSQL",cardTitle:"Microsoft SQL",cardText:"Microsoft SQL"
    }
  ]

  ngOnInit(): void {
  }

}
