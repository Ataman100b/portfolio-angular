import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../button/button.component';
import { TranslatePipe } from '@ngx-translate/core';
import { Project } from '../../models/types';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ButtonComponent, TranslatePipe],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project!: Project;
  @Input() isSecondElement: boolean = false;
}