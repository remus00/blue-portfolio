import grainImage from '@/assets/images/grain.jpg';
import { Testimonials } from '@/types';
import Image from 'next/image';

interface Props {
    data: Testimonials;
}

export const TestimonialsCard = ({ data }: Props) => {
    const { name, position, text, avatar } = data;

    return (
        <div className="relative z-0 max-w-xs overflow-hidden rounded-3xl bg-gray-800 p-6 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:content-[''] md:max-w-md md:p-8">
            <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
            />
            <div className="flex items-center gap-4">
                <div className="inline-block size-14 shrink-0 items-center justify-center rounded-full bg-gray-700">
                    <Image src={avatar} alt={name} className="max-h-full" />
                </div>
                <div className="">
                    <div className="font-semibold">{name}</div>
                    <div className="text-sm text-white/40">{position}</div>
                </div>
            </div>
            <p className="mt-4 text-sm md:mt-6 md:text-base">{text}</p>
        </div>
    );
};
