import bookImg from '@/assets/images/book-cover.png';
import mapImg from '@/assets/images/map.png';
import memoji from '@/assets/images/memoji-smile.png';
import { hobbies, toolboxItems } from '@/constants';
import Image from 'next/image';
import { AboutCard } from '../custom/about-card';
import { SectionHeader } from '../custom/section-header';
import { ToolboxItems } from '../custom/toolbox-items';

export const About = () => {
    return (
        <section className="py-20 lg:py-28">
            <div className="container">
                <SectionHeader
                    label="About me"
                    title="A Glimse Into My World"
                    description="Learn more about who I am, when I do and what inspires me"
                />
                <div className="mt-20 flex flex-col gap-8">
                    <div className="grid gap-8 md:grid-cols-5 lg:grid-cols-3">
                        <AboutCard
                            title="My Reads"
                            description="Explore the books shaping my perspectives."
                            className="md:col-span-2 lg:col-span-1"
                        >
                            <div className="mx-auto mt-2 w-40 md:mt-0">
                                <Image src={bookImg} alt="book-cover" />
                            </div>
                        </AboutCard>

                        <AboutCard
                            title="My Toolbox"
                            description="Explore the technologies and tools I use to craft
                                exceptional digital experiences."
                            className="md:col-span-3 lg:col-span-2"
                        >
                            <ToolboxItems data={toolboxItems} />
                            <ToolboxItems
                                data={toolboxItems}
                                className="mt-6"
                                itemsWrapperClassName="-translate-x-1/2"
                            />
                        </AboutCard>
                    </div>

                    <div className="grid gap-8 md:grid-cols-5 lg:grid-cols-3">
                        <AboutCard
                            title="Beyond the Code"
                            description=" Explore my interest and hobbies beyond the digital realm"
                            className="md:col-span-3 lg:col-span-2"
                        >
                            {hobbies.map(({ title, emoji, left, top }, idx) => (
                                <div
                                    key={idx}
                                    className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
                                    style={{ left: left, top: top }}
                                >
                                    <span className="font-medium text-gray-950">
                                        {title}
                                    </span>
                                    <span>{emoji}</span>
                                </div>
                            ))}
                        </AboutCard>

                        <AboutCard className="md:col-span-2 lg:col-span-1">
                            <Image
                                src={mapImg}
                                alt="map"
                                className="h-full w-full object-cover object-left-top"
                            />
                            <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:outline-gray-950/30 after:content-['']">
                                <Image
                                    src={memoji}
                                    alt="memoji smiling"
                                    className="size-20"
                                />
                            </div>
                        </AboutCard>
                    </div>
                </div>
            </div>
        </section>
    );
};
