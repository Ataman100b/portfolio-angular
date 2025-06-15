import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleComponent } from '../../bubble/bubble.component';
import { ProjectComponent } from '../project/project.component';
import { TranslatePipe } from '@ngx-translate/core';
import { Project } from '../../models/types';
import { PROJECT_URLS, GITHUB_REPOS } from '../../constants/app.constants';

@Component({
  selector: 'app-projects-area',
  standalone: true,
  imports: [CommonModule, BubbleComponent, ProjectComponent, TranslatePipe],
  templateUrl: './projects-area.component.html',
  styleUrls: ['./projects-area.component.scss']
})
export class ProjectsAreaComponent {
  title: string = "My Projects";
  description: string = "These projects showcase my expertise in frontend development, AI integration, and automation. Each project demonstrates different skills and modern web technologies.";
  
  projects: Project[] = [
    {
      title: "Join",
      stack: "Angular | TypeScript | HTML | CSS",
      description: "Task manager inspired by the Kanban System. A collaborative project management tool with drag-and-drop functionality.",
      github: GITHUB_REPOS.JOIN,
      projectUrl: PROJECT_URLS.JOIN,
      prevImageUrl: "assets/img/preview_join.svg"
    },
    {
      title: "El Pollo Loco",
      stack: "JavaScript (OOP) | HTML | CSS",
      description: "Jump-and-Run game based on an object-oriented approach. Features include character movement, collision detection, and enemy AI.",
      github: GITHUB_REPOS.EL_POLLO_LOCO,
      projectUrl: PROJECT_URLS.EL_POLLO_LOCO,
      prevImageUrl: "assets/img/preview_polloloco.png"
    },
    {
      title: "Pokedex",
      stack: "REST API | JavaScript | HTML | CSS",
      description: "Pokedex App using REST API to fetch all Pokemon data from the PokeAPI. Includes search functionality and detailed Pokemon information.",
      github: GITHUB_REPOS.POKEDEX,
      projectUrl: PROJECT_URLS.POKEDEX,
      prevImageUrl: "assets/img/preview_pokedex.png"
    }
  ];
}