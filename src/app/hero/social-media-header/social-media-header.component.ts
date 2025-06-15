import { Component } from '@angular/core';
import { SocialLink } from '../../models/types';
import { SOCIAL_LINKS } from '../../constants/app.constants';

@Component({
  selector: 'app-social-media-header',
  standalone: true,
  templateUrl: './social-media-header.component.html',
  styleUrls: ['./social-media-header.component.scss']
})
export class SocialMediaHeaderComponent {
  socialLinks: SocialLink[] = [
    { 
      name: 'GitHub', 
      icon: 'assets/icons/github_blue.svg', 
      href: SOCIAL_LINKS.GITHUB 
    },
    { 
      name: 'LinkedIn', 
      icon: 'assets/icons/linked-in_blue.svg', 
      href: SOCIAL_LINKS.LINKEDIN 
    },
    { 
      name: 'Email', 
      icon: 'assets/icons/mail_blue.svg', 
      href: SOCIAL_LINKS.EMAIL 
    }
  ];
}