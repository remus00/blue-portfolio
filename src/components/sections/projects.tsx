import { portfolioProjects } from '@/constants';
import { ProjectCard } from '../custom/projects-card';
import { SectionHeader } from '../custom/section-header';

export const Projects = () => {
    return (
        <section className="pb-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    label="Real-world Results"
                    title="Featured Projects"
                    description="See how I tranformed concepts into engaging digital experiences."
                />

                <div className="mt-10 flex flex-col gap-20 md:mt-20">
                    {portfolioProjects.map((project, idx) => (
                        <ProjectCard key={idx} data={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
