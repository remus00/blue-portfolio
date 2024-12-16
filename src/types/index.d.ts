import { StaticImageData } from 'next/image';

export type Projects = {
    company: string;
    year: string;
    title: string;
    results: { title: string }[];
    link: string;
    image: StaticImageData;
};

export type Testimonials = {
    name: string;
    position: string;
    text: string;
    avatar: StaticImageData;
};
