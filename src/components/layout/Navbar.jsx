import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled
                    ? 'bg-brand-light/90 dark:bg-brand-dark/90 backdrop-blur-md shadow-lg py-3 dark:shadow-brand-blue/10 dark:border-b dark:border-slate-800'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="text-2xl font-bold font-poppins text-brand-blue cursor-pointer"
                >
                    CF<span className="text-brand-purple">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-6 font-inter text-sm font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="cursor-pointer text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-blue transition-colors relative group"
                                    activeClass="text-brand-blue dark:text-brand-blue"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Nav Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-slate-700 dark:text-slate-300"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-slate-700 dark:text-slate-300"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute w-full bg-brand-light dark:bg-brand-dark shadow-xl transition-all duration-300 border-b border-slate-200 dark:border-slate-800 lg:hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <ul className="flex flex-col py-4 px-6 space-y-4 font-inter text-sm font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="block cursor-pointer text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-blue"
                                activeClass="text-brand-blue dark:text-brand-blue"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
