import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const HeroSection = () => {
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    toast({
      title: "🚧 Fitur ini belum tersedia. Minta langsung ke tim kami! 🚀",
      duration: 4000,
    });
  };

  const handleConsultationClick = () => {
    toast({
      title: "🚧 Konsultasi akan segera dibuka. Tunggu info selanjutnya! 💬",
      duration: 4000,
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm z-0"
      >
        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
        {/* Fallback gradient blob */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-blob" />
      </video>

      {/* Floating Blobs (extra ambient) */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-36 h-36 bg-purple-600/20 rounded-full blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="text-white">BENERUN</span>{' '}
              <span className="text-xl md:text-2xl text-blue-300 font-medium uppercase tracking-wider">Project</span>
            </h1>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-5xl font-semibold leading-tight text-white mb-6"
          >
            Konten Menarik,{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-white">
              Interaksi Meledak
            </span>
            <br />— Bersama Benerun Pro!
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Solusi konten dan digital presence yang menjangkau lebih luas dan membangun loyalitas audiens — tanpa ribet.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-medium rounded-2xl shadow-md hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Chat WhatsApp
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              onClick={handleConsultationClick}
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 border border-blue-300 text-white px-8 py-4 text-lg font-medium rounded-2xl shadow-md backdrop-blur-sm hover:scale-105 transition-transform"
            >
              <Sparkles className="w-5 h-5 mr-3" />
              Konsultasi Gratis
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center items-center text-sm text-gray-300"
          >
            {[
              ['bg-green-400', '100+ Klien Puas'],
              ['bg-blue-400', 'Hasil Terbukti'],
              ['bg-purple-400', 'Konsultasi Gratis']
            ].map(([bg, label], i) => (
              <div key={i} className="flex items-center gap-3 justify-center">
                <div className={`w-3 h-3 ${bg} rounded-full animate-pulse`} />
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center items-start p-1"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
