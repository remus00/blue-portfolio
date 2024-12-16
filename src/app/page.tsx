import { Header } from '@/components/sections/header';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Tape } from '@/components/sections/tape';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Projects />
            <Tape />
        </>
    );
}
