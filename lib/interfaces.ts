export interface Tech {
    name: string;
    icon: string;
}

export interface HeroSectionPageProps {
    techStack: Tech[]
    fullName: string;
    subTitle: string;
    description: string;
}