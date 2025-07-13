import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Dribbble,
  ArrowRight,
  ArrowUp,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

// --- DATA ---
const navLinks = {
  company: [
    { name: 'Tentang Kami', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Testimoni', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  services: [
    'Social Media Content',
    'Video Editing',
    'Copywriting',
    'Web Design Interaktif',
    'Konsultasi Strategi',
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', name: 'Instagram' },
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: Dribbble, href: '#', name: 'Dribbble' },
];

// --- SUB-COMPONENTS ---
const FooterLink = ({ children, href }) => (
  <a
    href={href}
    className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
  >
    {children}
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

// --- MAIN COMPONENT ---
const Footer = () => {
  const { toast } = useToast();

  const handleActionClick = () => {
    toast({
      title: "🚀 Navigasi Berfungsi!",
      description: "Di aplikasi nyata, ini akan mengarahkan Anda ke halaman yang relevan.",
      duration: 3000,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative pt-24 overflow-hidden bg-black text-white font-sans">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:36px_36px]"
          style={{ maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)' }}
        />
        <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Pre-Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 mb-24"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Punya project luar biasa?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl">
                Jangan biarkan ide Anda menunggu. Mari kita wujudkan bersama menjadi sebuah kenyataan digital yang berdampak.
              </p>
            </div>
            <Button
              onClick={handleActionClick}
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-fuchsia-500 hover:from-sky-600 hover:to-fuchsia-600 text-white font-semibold rounded-xl px-8 py-4 text-lg shadow-lg hover:scale-105 transition-transform duration-300 flex-shrink-0"
            >
              Mari Bicara <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand & Socials */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-8 h-8 text-sky-400" />
                <span className="text-3xl font-bold tracking-tighter text-white">
                  BENERUN PROJECT
                </span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm mb-8">
              Partner akselerasi digital Anda, mengubah ide menjadi konten & website yang menghasilkan dampak nyata.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-sky-500/50 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-6">Navigasi</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-4">
                {navLinks.company.map(link => (
                  <li key={link.name}><FooterLink href={link.href}>{link.name}</FooterLink></li>
                ))}
              </ul>
              <ul className="space-y-4">
                {navLinks.services.map(service => (
                  <li key={service}><FooterLink href="#">{service}</FooterLink></li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-6">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <FooterLink href="mailto:hello@benerunpro.com">hello@benerunpro.com</FooterLink>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <FooterLink href="tel:+6281234567890">+62 812-3456-7890</FooterLink>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Jakarta Selatan, Indonesia</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Sub-Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-24 py-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Benerun Project. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </div>
        </motion.div>
      </div>

      {/* Floating Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-tr from-sky-500 to-fuchsia-500 rounded-full flex items-center justify-center shadow-2xl z-50"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;