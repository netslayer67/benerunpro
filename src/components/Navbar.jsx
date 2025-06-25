import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
    { id: "tentang", label: "Tentang" },
    { id: "layanan", label: "Layanan" },
    { id: "portfolio", label: "Portfolio" },
    { id: "testimoni", label: "Testimoni" },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-blend-saturation backdrop-blur-md border-b border-white/5">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Branding */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-xl md:text-2xl font-bold tracking-wide flex items-center gap-1 text-white"
                >
                    <span className="text-white">BENERUN</span>
                    <span className="text-blue-500">PRO</span>
                </motion.div>

                {/* Desktop Menu */}
                <motion.ul
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300"
                >
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <Link
                                to={item.id}
                                spy={true}
                                smooth={true}
                                duration={600}
                                offset={-80}
                                className="cursor-pointer hover:text-white transition-all duration-300"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </motion.ul>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    {/* Dark Mode Toggle */}
                    {/* <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                    >
                        {mode === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button> */}

                    {/* CTA */}
                    <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-md transition-transform hover:scale-100">
                        KONSULTASI GRATIS
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black/90 text-white px-6 pb-4"
                    >
                        <ul className="flex flex-col gap-4 mt-4 text-sm">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        to={item.id}
                                        spy={true}
                                        smooth={true}
                                        duration={600}
                                        offset={-80}
                                        onClick={() => setMobileOpen(false)}
                                        className="block w-full py-2 hover:text-blue-400 transition"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
