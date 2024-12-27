import grainImage from '@/assets/images/grain.jpg';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { Star } from '../icons/star';

interface Props {
    children: ReactNode;
    className?: string;
    headerClassName?: string;
    contentClassName?: string;
    title?: string;
    description?: string;
}

export const AboutCard = ({
    children,
    className,
    headerClassName,
    contentClassName,
    title,
    description,
}: Props) => {
    return (
        <div
            className={cn(
                "relative z-0 h-[320px] overflow-hidden rounded-3xl bg-gray-800 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:content-['']",
                className
            )}
        >
            <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
            />
            <div className="flex h-full flex-col">
                {title && description && (
                    <div
                        className={cn(
                            'flex-shrink-0 p-6 md:px-10 md:py-8',
                            headerClassName
                        )}
                    >
                        <div className="inline-flex items-center gap-2">
                            <Star className="size-9 text-emerald-300" />
                            <h3 className="font-serif text-3xl">{title}</h3>
                        </div>
                        <p className="mt-2 text-sm text-white/60 lg:max-w-xs lg:text-base">
                            {description}
                        </p>
                    </div>
                )}
                <div className={cn('relative flex-grow', contentClassName)}>
                    {children}
                </div>
            </div>
        </div>
    );
};
