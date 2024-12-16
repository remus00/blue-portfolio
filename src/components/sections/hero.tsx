import { default as memojiImage } from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import { HeroBg } from '../custom/hero-bg';
import { ArrowDown } from '../icons/arrow-down';

export const Hero = () => {
    return (
        <section className="relative z-0 overflow-x-clip py-32 md:py-48 lg:py-60">
            <HeroBg />
            <div className="container">
                <div className="flex flex-col items-center">
                    <Image
                        src={memojiImage}
                        className="size-[100px]"
                        alt="Remus Burlacu memoji"
                    />
                    <div className="flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
                        <div className="size-2.5 rounded-full bg-green-500" />
                        <div className="text-sm font-medium">
                            Available for new projects
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-lg">
                    <h1 className="mt-4 text-center font-serif text-3xl tracking-wide md:text-5xl">
                        Building Exceptional User Experiences
                    </h1>
                    <p className="mt-4 text-center text-white/60 md:text-lg">
                        I specialize in transforming designs into functional,
                        high-performing web applications. Let&apos;s discuss your next
                        project
                    </p>
                </div>
                <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-center">
                    <button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6">
                        <span className="font-semibold">Explore my work</span>
                        <ArrowDown className="size-4" />
                    </button>
                    <button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900">
                        <span>👋🏻</span>
                        <span className="font-semibold">Let&apos;s connect</span>
                    </button>
                </div>
            </div>
        </section>
    );
};
