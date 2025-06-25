
import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Sparkles
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (platform) => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀",
      duration: 4000,
    });
  };

  const handleLinkClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀",
      duration: 4000,
    });
  };

  const services = [
    'Social Media Content Creation',
    'Video Editing Profesional',
    'Copywriting & Caption Strategis',
    'Web Design Interaktif',
    'Konsultasi Strategi Digital'
  ];

  const quickLinks = [
    'Tentang Kami',
    'Portfolio',
    'Layanan',
    'Testimoni',
    'Blog',
    'Kontak',
    'FAQ',
    'Karir'
  ];

  return (
    <footer className="relative py-24 overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <span className="text-4xl font-black gradient-text">BENERUN</span>
              <div className="flex items-center gap-2 mt-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span className="text-lg font-semibold text-blue-300 tracking-wider">
                  PROJECT
                </span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Penyedia layanan pembuatan konten media sosial & website interaktif
              yang terbukti meningkatkan engagement dan reach klien.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, name: 'Instagram' },
                { icon: Facebook, name: 'Facebook' },
                { icon: Linkedin, name: 'LinkedIn' },
                { icon: Youtube, name: 'YouTube' }
              ].map((social, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleSocialClick(social.name)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 hover:bg-blue-600/50 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-white mb-6 block">Layanan Kami</span>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={handleLinkClick}
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-300 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-white mb-6 block">Quick Links</span>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={handleLinkClick}
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-white mb-6 block">Kontak</span>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">hello@benerunpro.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">+62 21-1234-5678</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 mt-1" />
                <span className="text-gray-300">
                  Jakarta Selatan<br />
                  Indonesia
                </span>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 glass-effect rounded-xl">
              <span className="text-white font-semibold block mb-2">Jam Operasional</span>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Senin - Jumat: 09:00 - 18:00</div>
                <div>Sabtu: 09:00 - 15:00</div>
                <div>Minggu: Tutup</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              © 2024 Benerun Project. All rights reserved.
            </div>

            <div className="flex gap-6 text-sm">
              <button
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </button>
              <button
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </motion.div>

        {/* Floating Back to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover-lift z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↑
          </motion.div>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
