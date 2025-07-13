import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const HeroSection = () => {
  const { toast } = useToast();

  const handleConsultationClick = () => {
    toast({
      title: "🚧 Konsultasi akan segera dibuka. Tunggu info selanjutnya! 💬",
      duration: 4000,
    });
  };

  const floatingVariants = {
    float: {
      y: [0, -10, 0, 10, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 pt-32 pb-20 md:pt-40 md:pb-24">
      {/* Background Layer 1: Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.15 }} // Adjust opacity to blend with effects
      >
        <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
      </video>

      {/* Background Layer 2: Effects */}
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-[1]">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:36px_36px]"
          style={{ maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)' }}
        />
      </div>

      {/* Radial Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -z-[1] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[120px] animate-pulse" />

      {/* Content Layer */}
      <div className="relative z-10 grid max-w-7xl grid-cols-1 md:grid-cols-2 items-center gap-12 text-white">
        {/* Left Side: Headline & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start text-left"
        >
          <h1 className="text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl">
            Ubah Ide Menjadi
            <br />
            <span className="bg-gradient-to-br from-sky-300 to-blue-500 bg-clip-text text-transparent">
              Karya Digital.
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-gray-300 md:text-xl">
            Kami bukan hanya agensi. Kami adalah mitra strategis Anda dalam menciptakan konten yang tidak hanya dilihat, tapi juga dirasakan—dan menghasilkan konversi.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              onClick={handleConsultationClick}
              className="group relative inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-bold text-black shadow-lg transition-transform hover:scale-105"
            >
              Mulai Konsultasi Gratis
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group relative inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-base font-bold text-white shadow-lg backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white/10"
            >
              <PlayCircle className="mr-2 h-5 w-5 text-gray-400 transition-colors group-hover:text-white" />
              Lihat Portfolio
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side: Floating Visuals */}
        <div className="relative hidden h-full w-full items-center justify-center md:flex">
          <motion.div
            variants={floatingVariants}
            animate="float"
            className="glass-card absolute top-10 right-0 w-60 rounded-2xl p-4 shadow-2xl"
            style={{ transform: 'rotate(5deg)' }}
          >
            <p className="text-sm font-bold">Kampanye Fashion Z</p>
            <p className="mt-1 text-xs text-gray-400">Peningkatan Engagement: +450%</p>
            <div className="mt-3 h-20 w-full rounded-lg bg-pink-500/20"></div>
          </motion.div>

          <motion.div
            variants={floatingVariants}
            animate="float"
            transition={{ duration: 10 }}
            className="glass-card absolute bottom-16 left-0 w-52 rounded-2xl p-4 shadow-2xl"
            style={{ transform: 'rotate(-8deg)' }}
          >
            <p className="text-sm font-bold">Website Interaktif Kopi</p>
            <p className="mt-1 text-xs text-gray-400">Conversion Rate: 18.5%</p>
            <div className="mt-3 h-16 w-full rounded-lg bg-green-500/20"></div>
          </motion.div>

          <motion.div
            variants={floatingVariants}
            animate="float"
            transition={{ duration: 12 }}
            className="glass-card absolute -bottom-8 right-10 w-48 rounded-2xl p-4 shadow-2xl"
            style={{ transform: 'rotate(12deg)' }}
          >
            <p className="text-sm font-bold">Konten Edukasi Viral</p>
            <p className="mt-1 text-xs text-gray-400">Organik Views: +500K</p>
            <div className="mt-3 h-12 w-full rounded-lg bg-purple-500/20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;