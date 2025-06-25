
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Wijaya',
      position: 'Founder, Bella Fashion',
      company: 'Bella Fashion',
      rating: 5,
      text: 'Benerun Pro benar-benar mengubah game social media kami! Dalam 2 bulan, engagement naik 400% dan sales online meningkat drastis. Tim mereka sangat profesional dan kreatif.',
      image: 'Professional businesswoman Sarah Wijaya, founder of fashion company',
      results: '+400% Engagement',
      industry: 'Fashion & Lifestyle'
    },
    {
      id: 2,
      name: 'Ahmad Rizki',
      position: 'Marketing Director',
      company: 'TechStart Indonesia',
      rating: 5,
      text: 'Website yang dibuat Benerun Pro tidak hanya cantik, tapi juga conversion rate-nya luar biasa. Dari 2.1% jadi 12.8%! ROI yang sangat menguntungkan untuk bisnis kami.',
      image: 'Professional marketing director Ahmad Rizki from tech startup',
      results: '+500% Conversion',
      industry: 'Technology'
    },
    {
      id: 3,
      name: 'Maya Sari',
      position: 'Owner',
      company: 'Healthy Bites Cafe',
      rating: 5,
      text: 'Konten video yang dibuat tim Benerun sangat engaging! Reels kami sering viral dan customer baru terus berdatangan. Investasi terbaik untuk marketing kami.',
      image: 'Cafe owner Maya Sari in her healthy food restaurant',
      results: '+300% Reach',
      industry: 'Food & Beverage'
    },
    {
      id: 4,
      name: 'Budi Santoso',
      position: 'CEO',
      company: 'EduTech Solutions',
      rating: 5,
      text: 'Copywriting mereka benar-benar powerful! Email marketing campaign yang mereka buat menghasilkan open rate 45% dan click rate 18%. Angka yang fantastis!',
      image: 'CEO Budi Santoso of educational technology company',
      results: '+600% Email Performance',
      industry: 'Education'
    },
    {
      id: 5,
      name: 'Lisa Permata',
      position: 'Brand Manager',
      company: 'Glow Beauty',
      rating: 5,
      text: 'Strategi konten dari Benerun Pro membuat brand awareness kami melonjak tinggi. Follower naik 250% dalam 3 bulan dan brand recognition meningkat signifikan.',
      image: 'Beauty brand manager Lisa Permata in modern office',
      results: '+250% Followers',
      industry: 'Beauty & Cosmetics'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-black text-white font-sans">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Kata <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Klien Kami</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cerita nyata dari brand-brand yang telah kami bantu transformasi digitalnya.
          </p>
        </motion.div>

        {/* Testimonial */}
        <div className="max-w-6xl mx-auto mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-white/5 backdrop-blur-xl p-12 shadow-2xl border border-white/10 relative"
            >
              <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-400/30" />

              <div className="grid md:grid-cols-3 gap-12 items-center">
                {/* Konten */}
                <div className="md:col-span-2">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
                    “{testimonials[currentIndex].text}”
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonials[currentIndex].name}</h4>
                      <p className="text-blue-300 font-semibold">{testimonials[currentIndex].position}</p>
                      <p className="text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1.5 rounded-lg font-semibold text-sm mb-2 shadow">
                        {testimonials[currentIndex].results}
                      </div>
                      <p className="text-gray-400 text-sm">{testimonials[currentIndex].industry}</p>
                    </div>
                  </div>
                </div>

                {/* Gambar */}
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="relative"
                  >
                    <img
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                      alt={`${testimonials[currentIndex].name} - ${testimonials[currentIndex].position}`}
                      src="https://images.unsplash.com/photo-1644424235476-295f24d503d9"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
                  </motion.div>
                  <div className="absolute -bottom-4 -right-4 bg-white/5 backdrop-blur-lg rounded-xl p-3 border border-blue-300/30 shadow">
                    <span className="text-blue-300 font-semibold text-sm">
                      {testimonials[currentIndex].company}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigasi Carousel */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="icon"
            className="rounded-full bg-white/5 border border-white/10 hover:bg-blue-500/30 transition-all duration-300 p-3"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </Button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-blue-400 w-6' : 'bg-gray-600 hover:bg-gray-400'
                  }`}
              />
            ))}
          </div>
          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="icon"
            className="rounded-full bg-white/5 border border-white/10 hover:bg-blue-500/30 transition-all duration-300 p-3"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </Button>
        </div>

        {/* Statistik */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '150+', label: 'Happy Clients' },
            { number: '4.9/5', label: 'Avg. Rating' },
            { number: '300%', label: 'Avg. Growth' },
            { number: '98%', label: 'Retention Rate' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center rounded-2xl bg-white/5 backdrop-blur-md p-6 border border-white/10 shadow-md hover:shadow-blue-500/20 transition-all"
            >
              <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

};

export default TestimonialSection;
