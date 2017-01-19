import {Component, OnInit} from '@angular/core';
import {Advantage} from '../shared/entity/advantage'
import {AdvantageService} from '../shared/service/advantage.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.css']
})
export class AdvantageComponent implements OnInit {
  title = 'Admin - Avantages';
  advantages: Observable<Advantage[]>;

  constructor(private advantageService: AdvantageService) {
  }

  ngOnInit() {
    this.advantages = this.advantageService.getAdvantages();
  }
}
