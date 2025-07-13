import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Target, CheckCircle, BrainCircuit, PenTool } from 'lucide-react';

const AboutSection = () => {
  // Data untuk kartu statistik
  const stats = [
    {
      icon: TrendingUp,
      number: "300%",
      label: "Peningkatan Engagement",
      description: "Rata-rata interaksi audiens klien kami."
    },
    {
      icon: Users,
      number: "150+",
      label: "Klien Puas",
      description: "Brand yang tumbuh bersama kami."
    },
    {
      icon: Award,
      number: "500K+",
      label: "Views Generated",
      description: "Total tayangan dari konten yang kami buat."
    },
    {
      icon: Target,
      number: "95%",
      label: "Success Rate",
      description: "Tingkat kepuasan & pencapaian target."
    }
  ];

  // Data untuk poin keunggulan
  const whyPoints = [
    {
      icon: BrainCircuit,
      title: 'Strategi Berbasis Data',
      description: 'Setiap konten lahir dari analisis mendalam terhadap tren dan audiens Anda.',
    },
    {
      icon: PenTool,
      title: 'Eksekusi Kreatif Tanpa Batas',
      description: 'Tim ahli kami siap mengubah ide paling liar menjadi kenyataan digital yang memukau.',
    },
    {
      icon: CheckCircle,
      title: 'Hasil Terukur & Transparan',
      description: 'Kami berkomitmen pada hasil nyata yang dapat Anda lihat dan rasakan dampaknya.',
    },
  ];

  // Varian animasi untuk Framer Motion
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1, y: 0,
      // FIX: Mengganti nilai 'ease' yang salah dengan string yang valid
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* ADDED: Background Effects Container */}
      <div className="absolute inset-0 z-0">
        {/* Grid Background Pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:36px_36px]"
          style={{ maskImage: 'radial-gradient(ellipse at center, white 5%, transparent 60%)' }}
        />
        {/* Radial Glow Effect */}
        <div className="absolute top-1/4 left-1/4 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px] animate-pulse" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Judul Utama */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 md:mb-24 max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white">
            Bukan Sekadar Agensi,
          </motion.h2>
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-br from-sky-300 to-blue-500 bg-clip-text text-transparent">
            Kami adalah Mitra Pertumbuhan.
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Kami percaya bahwa konten hebat bukan hanya tentang estetika, tetapi tentang hasil. Inilah mengapa brand-brand ambisius memilih kami.
          </motion.p>
        </motion.div>

        {/* Grid "Why Us" dan Statistik */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bagian Kiri: Poin Keunggulan */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            {whyPoints.map((point, index) => (
              <motion.div key={index} variants={itemVariants} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-sky-900 to-blue-900/50 rounded-xl flex items-center justify-center border border-white/10">
                  <point.icon className="w-8 h-8 text-sky-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{point.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bagian Kanan: Statistik dalam Kartu */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 text-center transition-transform duration-300 hover:-translate-y-2"
              >
                <stat.icon className="w-10 h-10 text-sky-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <h3 className="text-md font-semibold text-gray-200">{stat.label}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;