
import React from 'react';
import { motion } from 'framer-motion';
import {
  Video,
  PenTool,
  Globe,
  Megaphone,
  Sparkles,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ServicesSection = () => {
  const { toast } = useToast();

  const services = [
    {
      icon: Video,
      title: 'Social Media Content Creation',
      description: 'Konten visual yang engaging dan viral-ready untuk semua platform media sosial',
      features: [
        'Video editing profesional dengan motion graphics',
        'Desain feed Instagram yang konsisten',
        'Reels & TikTok yang trending',
        'Stories template yang menarik',
        'Content calendar & scheduling'
      ],
      price: 'Mulai dari 2.5jt',
      popular: true,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: PenTool,
      title: 'Video Editing Profesional',
      description: 'Transformasi footage mentah menjadi video berkualitas broadcast yang memukau',
      features: [
        'Color grading & audio mastering',
        'Motion graphics & visual effects',
        'Subtitle & caption styling',
        'Multi-platform optimization',
        'Revisi unlimited hingga perfect'
      ],
      price: 'Mulai dari 1.8jt',
      popular: false,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Megaphone,
      title: 'Copywriting & Caption Strategis',
      description: 'Copy yang mengkonversi dan caption yang membangun engagement tinggi',
      features: [
        'Hook yang powerful & attention-grabbing',
        'CTA yang mengkonversi tinggi',
        'Storytelling yang emotional',
        'SEO-optimized captions',
        'A/B testing untuk performa optimal'
      ],
      price: 'Mulai dari 1.2jt',
      popular: false,
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Globe,
      title: 'Web Design Interaktif & Terjangkau',
      description: 'Website modern yang responsive, fast-loading, dan conversion-focused',
      features: [
        'Design UI/UX yang modern & intuitive',
        'Mobile-first responsive design',
        'SEO optimization & fast loading',
        'CMS integration & easy management',
        'Analytics & conversion tracking'
      ],
      price: 'Mulai dari 3.5jt',
      popular: false,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const handleGetQuote = (serviceName) => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀",
      duration: 4000,
    });
  };

  return (
    <section className="py-24 relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Judul Utama */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Layanan <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Premium</span> Kami
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Solusi menyeluruh untuk konten, digital branding, dan transformasi online brand Anda.
          </p>
        </motion.div>

        {/* Kartu Layanan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl bg-white/5 backdrop-blur-md shadow-xl border border-white/10 p-8 hover:shadow-blue-500/30 transition-all duration-300 group ${service.popular ? 'ring-2 ring-blue-400/40' : ''
                }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-md">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} group-hover:scale-105 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-base font-semibold text-white mb-3">Yang Anda Dapatkan:</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-400 italic">*Harga dapat disesuaikan</div>
                    </div>
                    <Button
                      onClick={() => handleGetQuote(service.title)}
                      className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white px-6 py-3 rounded-xl font-semibold group-hover:scale-105 transition-transform duration-300 flex items-center gap-2`}
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proses Kerja */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-12 shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Proses Kerja yang <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Terstruktur</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              ['01', 'Konsultasi & Brief', 'Diskusi tentang goals, audience & ekspektasi.'],
              ['02', 'Strategy & Planning', 'Strategi konten & timeline sesuai kebutuhan.'],
              ['03', 'Execution & Creation', 'Produksi kreatif dengan feedback aktif.'],
              ['04', 'Delivery & Optimization', 'Penyerahan hasil final & optimasi berkala.']
            ].map(([step, title, desc], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-xl font-bold text-white">{step}</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );

};

export default ServicesSection;
