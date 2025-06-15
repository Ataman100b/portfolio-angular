export interface Skill {
    name: string;
    icon: string;
    alt?: string;
    class?: string;
}

export interface Project {
    title: string;
    stack: string;
    description: string;
    github: string;
    projectUrl: string;
    prevImageUrl: string;
}

export interface SocialLink {
    name: string;
    icon: string;
    href: string;
}

export interface ValidationState {
    [key: string]: boolean;
}