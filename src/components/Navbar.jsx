'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
    { id: 'services', label: 'Layanan' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Testimoni' },
    { id: 'contact', label: 'Kontak' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Close mobile menu on resize
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMobileMenu = () => setMobileOpen(prev => !prev);

    // Animate body scroll lock
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [mobileOpen]);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out',
                scrolled || mobileOpen ? 'bg-black/30 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
            )}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    {/* Branding */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to="hero" smooth={true} duration={600} className="cursor-pointer flex items-center gap-2">
                            <Sparkles className="w-8 h-8 text-sky-400" />
                            <span className="text-2xl font-bold tracking-tighter text-white">
                                BENERUN <span className="bg-gradient-to-br from-sky-300 to-blue-500 bg-clip-text text-transparent">PRO</span>
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation with Magic Ink */}
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="hidden md:flex items-center gap-2 p-2 bg-black/10 backdrop-blur-sm rounded-full border border-white/10"
                    >
                        {navItems.map((item) => (
                            <li key={item.id} className="relative">
                                <Link
                                    to={item.id}
                                    spy={true}
                                    smooth={true}
                                    duration={600}
                                    offset={-96} // Adjusted for navbar height
                                    onSetActive={() => setActiveLink(item.id)}
                                    className={cn(
                                        "cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300",
                                        activeLink === item.id ? "text-white" : "text-gray-300 hover:text-white"
                                    )}
                                >
                                    {item.label}
                                </Link>
                                {activeLink === item.id && (
                                    <motion.div
                                        layoutId="active-nav-pill"
                                        className="absolute inset-0 bg-white/10 rounded-full"
                                        style={{ borderRadius: 9999 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </li>
                        ))}
                    </motion.ul>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="flex items-center gap-4"
                    >
                        <Button
                            asChild
                            className="hidden md:inline-flex h-11 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
                        >
                            <Link to="contact" smooth={true} duration={600} offset={-96}>
                                Konsultasi Gratis
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>

                        {/* Mobile Toggle */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="p-2 rounded-full text-white transition-colors"
                                aria-label="Toggle menu"
                            >
                                <AnimatePresence initial={false} mode="wait">
                                    <motion.div
                                        key={mobileOpen ? 'x' : 'menu'}
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {mobileOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                                    </motion.div>
                                </AnimatePresence>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-2xl"
                    >
                        <ul className="flex flex-col gap-2 p-6">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        to={item.id}
                                        spy={true}
                                        smooth={true}
                                        duration={600}
                                        offset={-96}
                                        onClick={toggleMobileMenu}
                                        className="block py-4 px-4 rounded-lg text-lg text-gray-200 hover:bg-white/10 hover:text-white transition-colors"
                                        activeClass="bg-sky-500/20 text-sky-300"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-6">
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-gradient-to-r from-sky-500 to-fuchsia-500 text-lg font-semibold text-white transition-transform hover:scale-105 active:scale-95"
                                >
                                    <Link to="contact" smooth={true} duration={600} offset={-96} onClick={toggleMobileMenu}>
                                        Konsultasi Gratis
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </Button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;