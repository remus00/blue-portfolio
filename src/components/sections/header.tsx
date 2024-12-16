import Link from 'next/link';

export const Header = () => {
    return (
        <header className="fixed left-1/2 top-3 z-10 flex -translate-x-1/2 items-center justify-center">
            <nav className="flex items-center gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
                <Link href="#" className="nav-item">
                    Home
                </Link>
                <Link href="#" className="nav-item">
                    Projects
                </Link>
                <Link href="#" className="nav-item">
                    About
                </Link>
                <Link
                    href="#"
                    className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-950"
                >
                    Contact
                </Link>
            </nav>
        </header>
    );
};
