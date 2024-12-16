import grainImage from '@/assets/images/grain.jpg';
import { Projects } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from '../icons/arrow-up-right';
import { CheckCircle } from '../icons/check-circle';

interface Props {
    data: Projects;
}

export const ProjectCard = ({ data }: Props) => {
    const { company, year, title, results, link, image } = data;

    return (
        <div className="relative z-0 overflow-hidden rounded-3xl bg-gray-800 px-8 pt-8 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:content-[''] md:px-10 md:pt-12 lg:px-20 lg:pt-16">
            <div
                className="absolute inset-0 -z-30 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
            />
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-tr from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent">
                        <span>{company}</span>
                        <span>&bull;</span>
                        <span>{year}</span>
                    </div>
                    <h3 className="mt-2 font-serif text-2xl md:mt-5 md:text-4xl">
                        {title}
                    </h3>

                    <hr className="mt-4 border-t-2 border-white/5 md:mt-5" />

                    <ul className="mt-4 flex flex-col gap-4 md:mt-5">
                        {results.map(({ title }, i) => (
                            <li
                                key={i}
                                className="flex gap-2 text-sm text-white/50 md:text-base"
                            >
                                <CheckCircle className="size-5 md:size-6" />
                                <span>{title}</span>
                            </li>
                        ))}
                    </ul>
                    <Link href={link} target="_blank">
                        <button className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white font-semibold text-gray-900 md:w-auto md:px-6">
                            <span>View live site</span>
                            <ArrowUpRight className="size-4" />
                        </button>
                    </Link>
                </div>

                <div className="relative">
                    <Image
                        src={image}
                        alt={title}
                        className="-mb-4 mt-8 md:-mb-0 lg:absolute lg:m-0 lg:h-full lg:w-auto lg:max-w-none"
                    />
                </div>
            </div>
        </div>
    );
};
