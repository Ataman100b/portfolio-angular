import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FooterAreaComponent } from '../../footer/footer-area/footer-area.component';
import { NavbarComponent } from '../../hero/navbar/navbar.component';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [FooterAreaComponent, NavbarComponent, TranslatePipe],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {
  currentLang: string;

  constructor(
    private titleService: Title,
    private translate: TranslateService
  ) {
    this.currentLang = this.translate.currentLang || 'en';
    this.setPageTitle();
    this.setupLanguageChangeSubscription();
  }

  private setPageTitle(): void {
    this.titleService.setTitle('Legal Notice | Robin Angelé');
  }

  private setupLanguageChangeSubscription(): void {
    this.translate.onLangChange.subscribe(() => {
      this.updateTitleBasedOnLanguage();
    });
  }

  private updateTitleBasedOnLanguage(): void {
    if (this.translate.currentLang === 'de') {
      this.titleService.setTitle('Impressum | Robin Angelé');
    } else {
      this.titleService.setTitle('Legal Notice | Robin Angelé');
    }
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
  }
}