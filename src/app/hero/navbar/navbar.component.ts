import { Component, HostListener } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { NgIf } from '@angular/common';
import { FORM_VALIDATION } from '../../constants/app.constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  scrolled = false;
  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || 'en';
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.scrolled = window.scrollY > FORM_VALIDATION.SCROLL_THRESHOLD;
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
  }
}