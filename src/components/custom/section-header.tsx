interface Props {
    label: string;
    title: string;
    description: string;
}

export const SectionHeader = ({ label, title, description }: Props) => {
    return (
        <>
            <div className="flex justify-center">
                <p className="bg-gradient-to-tr from-emerald-300 to-sky-400 bg-clip-text text-center font-semibold uppercase tracking-widest text-transparent">
                    {label}
                </p>
            </div>
            <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-md text-center text-white/60 md:text-lg lg:text-xl">
                {description}
            </p>
        </>
    );
};
