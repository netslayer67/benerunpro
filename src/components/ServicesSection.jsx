import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Video,
  PenTool,
  Globe,
  Megaphone,
  Sparkles,
  ArrowRight,
  CheckCircle,
  BarChart,
  Target,
  PenSquare,
  Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

// --- DATA ---
const servicesData = [
  {
    id: 'social-media',
    icon: Video,
    title: 'Social Media Content',
    description: 'Kami merancang dan memproduksi konten visual yang engaging dan viral-ready, dioptimalkan untuk setiap platform media sosial guna membangun audiens setia Anda.',
    features: [
      'Video editing profesional',
      'Desain feed Instagram konsisten',
      'Konten Reels & TikTok trending',
      'Content calendar & scheduling',
    ],
    price: 'Mulai dari 2.5jt',
    popular: true,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 'video-editing',
    icon: PenTool,
    title: 'Video Editing Profesional',
    description: 'Mengubah footage mentah Anda menjadi sebuah karya sinematik berkualitas broadcast yang siap memukau audiens dan menyampaikan pesan Anda secara efektif.',
    features: [
      'Color grading & audio mastering',
      'Motion graphics & VFX',
      'Subtitle & caption styling',
      'Revisi unlimited hingga sempurna',
    ],
    price: 'Mulai dari 1.8jt',
    popular: false,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'copywriting',
    icon: PenSquare,
    title: 'Copywriting & Strategi',
    description: 'Menyusun narasi dan copy yang tidak hanya menarik perhatian tetapi juga mengkonversi, membangun koneksi emosional dan mendorong tindakan.',
    features: [
      'Hook yang powerful',
      'Storytelling yang emosional',
      'SEO-optimized captions',
      'A/B testing untuk performa',
    ],
    price: 'Mulai dari 1.2jt',
    popular: false,
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'web-design',
    icon: Globe,
    title: 'Web Design Interaktif',
    description: 'Membangun website modern yang bukan hanya indah secara visual, tetapi juga responsif, cepat, dan dirancang untuk konversi pengunjung menjadi pelanggan.',
    features: [
      'UI/UX design yang modern',
      'Mobile-first responsive',
      'SEO optimization & fast-loading',
      'CMS integration & easy-to-manage',
    ],
    price: 'Mulai dari 3.5jt',
    popular: false,
    gradient: 'from-green-500 to-emerald-500'
  }
];

const processSteps = [
  { icon: Target, title: "Konsultasi & Brief", description: "Diskusi mendalam tentang goals, audience, dan ekspektasi Anda." },
  { icon: BarChart, title: "Strategi & Planning", description: "Menyusun strategi konten dan timeline yang terukur sesuai kebutuhan." },
  { icon: PenTool, title: "Eksekusi & Kreasi", description: "Proses produksi kreatif dengan iterasi dan feedback yang aktif dari Anda." },
  { icon: Rocket, title: "Delivery & Optimisasi", description: "Penyerahan hasil final dan analisis performa untuk optimasi berkelanjutan." }
];


// --- MAIN COMPONENT ---
const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState(servicesData.find(s => s.popular)?.id || servicesData[0].id);
  const { toast } = useToast();
  const activeService = servicesData.find(s => s.id === activeTab);

  const handleGetQuote = (serviceName) => {
    toast({
      title: `Permintaan Penawaran: ${serviceName}`,
      description: "Tim kami akan segera menghubungi Anda. Terima kasih!",
      duration: 4000,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden  text-white font-sans">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:36px_36px]"
          style={{ maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)' }}
        />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] md:h-[500px] md:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[120px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Solusi Digital, <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-400">Hasil Maksimal</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dari konten viral hingga website konversi tinggi, kami adalah partner akselerasi digital untuk brand Anda.
          </p>
        </motion.div>

        {/* Interactive Service Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {servicesData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${activeTab === tab.id ? 'text-white' : 'text-gray-400 hover:text-white'
                } relative flex items-center gap-3 px-4 py-3 md:px-6 md:py-3 font-semibold rounded-full transition-colors duration-300`}
            >
              <tab.icon className={`w-5 h-5 transition-colors ${activeTab === tab.id ? 'text-sky-400' : ''}`} />
              {tab.title}
              {tab.popular && (
                <Sparkles className="w-5 h-5 text-yellow-400" />
              )}

              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-service-pill"
                  className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Service Content Pane */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12"
            >
              {activeService && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                  <div className="lg:col-span-2">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{activeService.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-8">{activeService.description}</p>

                    <h4 className="text-lg font-semibold text-white mb-4">Yang Anda Dapatkan:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeService.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                          <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          <span className="text-sm text-gray-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center items-center text-center lg:items-start lg:text-left h-full">
                    <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-fuchsia-400 mb-2">
                      {activeService.price}
                    </div>
                    <div className="text-sm text-gray-400 italic mb-6">*Harga dapat disesuaikan</div>
                    <Button
                      onClick={() => handleGetQuote(activeService.title)}
                      size="lg"
                      className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                      Dapatkan Penawaran
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* How It Works Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-24 md:mt-32"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Proses Kami yang Terstruktur
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center group transition-all duration-300 hover:border-sky-500/50 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-500 to-fuchsia-500 rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;