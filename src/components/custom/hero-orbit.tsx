import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    size: number;
    rotate: number;
}

export const HeroOrbit = ({ children, size, rotate }: Props) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
                className="flex items-start justify-start"
                style={{
                    height: `${size}px`,
                    width: `${size}px`,
                    transform: `rotate(${rotate}deg)`,
                }}
            >
                <div
                    className="inline-flex"
                    style={{ transform: `rotate(${rotate * -1}deg)` }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
