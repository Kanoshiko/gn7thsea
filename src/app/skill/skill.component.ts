import {Component, OnInit} from '@angular/core';
import {Skill} from '../shared/entity/skill';
import {Restangular} from 'ng2-restangular';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  title = 'Admin - Compétences';
  skills: Skill[] = [];

  constructor(private restangular: Restangular) {
  }

  ngOnInit() {
    this.restangular.all('skills').getList().subscribe(skills => {
      console.debug(skills);
      return this.skills = skills;
    });
  }

}
