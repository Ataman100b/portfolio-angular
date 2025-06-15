import { Component } from '@angular/core';
import { SocialLink } from '../../models/types';
import { SOCIAL_LINKS } from '../../constants/app.constants';

@Component({
  selector: 'app-social-media-footer',
  standalone: true,
  templateUrl: './social-media-footer.component.html',
  styleUrls: ['./social-media-footer.component.scss']
})
export class SocialMediaFooterComponent {
  socialLinks: SocialLink[] = [
    { 
      name: 'GitHub', 
      icon: 'assets/icons/github_white.svg', 
      href: SOCIAL_LINKS.GITHUB 
    },
    { 
      name: 'LinkedIn', 
      icon: 'assets/icons/linked-in_white.svg', 
      href: SOCIAL_LINKS.LINKEDIN 
    },
    { 
      name: 'Email', 
      icon: 'assets/icons/mail_white.svg', 
      href: SOCIAL_LINKS.EMAIL 
    }
  ];
}