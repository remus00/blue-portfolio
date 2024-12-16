import grainImage from '@/assets/images/grain.jpg';
import { Sparkle } from '../icons/sparkle';
import { Star } from '../icons/star';
import { HeroOrbit } from './hero-orbit';

export const HeroBg = () => {
    return (
        <div className="absolute inset-0 [mask-image:linear-gradient(transparent,black_10%,black_70%,transparent)]">
            <div
                className="absolute inset-0 -z-30 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
            />

            <div className="hero-ring size-[620px]" />

            <div className="hero-ring size-[820px]" />

            <div className="hero-ring size-[1020px]" />

            <div className="hero-ring size-[1220px]" />

            <HeroOrbit size={800} rotate={-72}>
                <Star className="size-28 text-emerald-300" />
            </HeroOrbit>

            <HeroOrbit size={550} rotate={20}>
                <Star className="size-12 text-emerald-300" />
            </HeroOrbit>

            <HeroOrbit size={590} rotate={98}>
                <Star className="size-8 text-emerald-300" />
            </HeroOrbit>

            <HeroOrbit size={430} rotate={-14}>
                <Sparkle className="size-8 text-emerald-300/20" />
            </HeroOrbit>

            <HeroOrbit size={440} rotate={79}>
                <Sparkle className="size-5 text-emerald-300/20" />
            </HeroOrbit>

            <HeroOrbit size={530} rotate={178}>
                <Sparkle className="size-10 text-emerald-300/20" />
            </HeroOrbit>

            <HeroOrbit size={710} rotate={144}>
                <Sparkle className="size-14 text-emerald-300/20" />
            </HeroOrbit>

            <HeroOrbit size={720} rotate={85}>
                <div className="size-3 rounded-full bg-emerald-300/20" />
            </HeroOrbit>

            <HeroOrbit size={520} rotate={-41}>
                <div className="size-2 rounded-full bg-emerald-300/20" />
            </HeroOrbit>

            <HeroOrbit size={650} rotate={-5}>
                <div className="size-2 rounded-full bg-emerald-300/20" />
            </HeroOrbit>
        </div>
    );
};
