import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "300%",
      label: "Peningkatan Engagement",
      description: "Rata-rata peningkatan interaksi klien"
    },
    {
      icon: Users,
      number: "150+",
      label: "Klien Aktif",
      description: "Brand yang mempercayai layanan kami"
    },
    {
      icon: Award,
      number: "500K+",
      label: "Views Generated",
      description: "Total views yang dihasilkan untuk klien"
    },
    {
      icon: Target,
      number: "95%",
      label: "Success Rate",
      description: "Tingkat kepuasan dan hasil yang dicapai"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-black text-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6 text-shadow-md">
            Track Record yang <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Memukau</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Benerun Pro telah membantu ratusan brand mengubah strategi konten mereka
            menjadi mesin engagement yang powerful. Lihat bagaimana kami mengubah
            permainan digital marketing untuk klien-klien kami.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl bg-white/5 backdrop-blur-md p-8 text-center shadow-xl border border-white/10 hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6">
                <stat.icon className="w-12 h-12 text-blue-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{stat.label}</h3>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/5 backdrop-blur-xl p-12 max-w-5xl mx-auto border border-white/10 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Mengapa Klien Memilih{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Benerun Pro?</span>
              </h3>
              <div className="space-y-6 text-gray-300">
                {[
                  ['Strategi Data-Driven', 'Setiap konten dibuat berdasarkan analisis mendalam terhadap target audience dan tren terkini.', 'bg-blue-400'],
                  ['Tim Kreatif Berpengalaman', 'Didukung oleh tim profesional dengan track record di berbagai industri dan platform.', 'bg-purple-400'],
                  ['Hasil Terukur & Konsisten', 'Komitmen untuk memberikan peningkatan engagement dan reach yang signifikan dalam waktu singkat.', 'bg-green-400']
                ].map(([title, desc, dot], i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${dot}`} />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
                      <p className="text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  className="w-full h-80 object-cover"
                  src="https://images.unsplash.com/photo-1690191886622-fd8d6cda73bd"
                  alt="Tim kreatif Benerun Pro"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 rounded-full p-4 border border-yellow-400/30 bg-white/10 backdrop-blur-md"
              >
                <Award className="w-8 h-8 text-yellow-400" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
