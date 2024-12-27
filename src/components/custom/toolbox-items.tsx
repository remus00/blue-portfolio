import { toolboxItems } from '@/constants';
import { cn } from '@/lib/utils';
import { TechIcon } from '../icons/tech-icon';

interface Props {
    data: typeof toolboxItems;
    className?: string;
    itemsWrapperClassName?: string;
}

export const ToolboxItems = ({ data, className, itemsWrapperClassName }: Props) => {
    return (
        <div
            className={cn(
                'flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
                className
            )}
        >
            <div
                className={cn('flex flex-none gap-6 py-0.5 pr-6', itemsWrapperClassName)}
            >
                {data.map(({ title, iconType }, idx) => (
                    <div
                        key={idx}
                        className="inline-flex items-center gap-4 rounded-lg px-3 py-2 outline outline-2 outline-white/10"
                    >
                        <TechIcon component={iconType} />
                        <span className="font-semibold">{title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
