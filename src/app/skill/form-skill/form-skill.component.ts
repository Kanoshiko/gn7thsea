import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Skill} from '../../shared/entity/skill'
import {Restangular} from 'ng2-restangular';

@Component({
  selector: 'app-form-skill',
  templateUrl: './form-skill.component.html',
  styleUrls: ['./form-skill.component.css']
})
export class FormSkillComponent implements OnInit {
  private skill: Skill;

  constructor(private route: ActivatedRoute,
              private restangular: Restangular,
              private router: Router) {
  }

  ngOnInit() {
    this.skill = new Skill();

    this.route.params.subscribe((params: Params) => {
      this.restangular.one('skills', params['id']).get()
        .subscribe(skill => this.skill = skill);
    });
  }

  validate(): void {
    this.restangular.all('skills').post(this.skill)
      .subscribe(() => this.router.navigate(['/skills']));
  }

}
