import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private items: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'fa-home',
        url: '/'
      },
      {
        label: 'Créer un personnage',
        icon: 'fa-plus-square',
        url: '/character/new'
      },
      {
        label: 'Admin',
        icon: 'fa-edit',
        items: [
          {
            label: 'Avantages',
            icon: 'fa-pencil',
            url: '/advantages'
          },
          {
            label: 'Compétences',
            icon: 'fa-pencil',
            url: '/skills'
          }
        ]
      }
    ];
  }
}
