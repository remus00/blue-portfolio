import grainImg from '@/assets/images/grain.jpg';
import { ArrowUpRight } from '../icons/arrow-up-right';

export const CTA = () => {
    return (
        <section className="py-16 pt-12 lg:py-24 lg:pt-20">
            <div className="container">
                <div className="blue-gradient relative z-0 rounded-3xl px-10 py-8 text-center text-gray-900 md:text-left">
                    <div
                        className="absolute inset-0 -z-10 overflow-hidden opacity-5"
                        style={{
                            backgroundImage: `url(${grainImg.src})`,
                        }}
                    />
                    <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
                        <div className="">
                            <h2 className="font-serif text-2xl md:text-3xl">
                                Let&apos;s create something amazing together
                            </h2>
                            <p className="mt-2 text-sm md:text-base">
                                Ready to bring your next project to life? Let&apos;s
                                connect and discuss how I can help you achieve your goals.
                            </p>
                        </div>
                        <div className="">
                            <button className="inline-flex h-12 w-max items-center gap-2 rounded-xl border border-gray-900 bg-gray-900 px-6 text-white">
                                <span className="font-semibold">Contact Me</span>{' '}
                                <ArrowUpRight className="size-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
