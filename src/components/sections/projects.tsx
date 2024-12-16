import { portfolioProjects } from '@/constants';
import { ProjectCard } from '../custom/projects-card';

export const Projects = () => {
    return (
        <section className="pb-16 lg:py-24">
            <div className="container">
                <div className="flex justify-center">
                    <p className="bg-gradient-to-tr from-emerald-300 to-sky-400 bg-clip-text text-center font-semibold uppercase tracking-widest text-transparent">
                        Real-world Results
                    </p>
                </div>
                <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl">
                    Featured Projects
                </h2>
                <p className="mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl">
                    See how I tranformed concepts into engaging digital experiences.
                </p>

                <div className="mt-10 flex flex-col gap-20 md:mt-20">
                    {portfolioProjects.map((project, idx) => (
                        <ProjectCard key={idx} data={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
