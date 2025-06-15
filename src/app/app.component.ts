import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateService } from "@ngx-translate/core";
import AOS from 'aos';
// Import the translations
import translationsEN from "../../public/i18n/en.json";
import translationsDE from "../../public/i18n/de.json";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfoliorobin';

  constructor(
    private router: Router,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.initializeTranslations();
  }

  ngOnInit() {
    this.initializeAOS();
  }

  private initializeTranslations(): void {
    this.translate.setTranslation('en', translationsEN);
    this.translate.setTranslation('de', translationsDE);
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  private initializeAOS(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  shouldShowContactButton(): boolean {
    const currentPath = this.router.url;
    // Hide button on legal notice and privacy policy pages
    return !currentPath.includes('legal-notice') && !currentPath.includes('privacy-policy');
  }
}
