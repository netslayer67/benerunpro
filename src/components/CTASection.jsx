
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const CTASection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    'Social Media Content Creation',
    'Video Editing Profesional',
    'Copywriting & Caption Strategis',
    'Web Design Interaktif',
    'Konsultasi Strategi Digital',
    'Paket Lengkap (All Services)'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀",
      duration: 4000,
    });
  };

  const handleWhatsAppClick = () => {
    toast({
      title: "🚧 Fitur ini belum diimplementasikan—tapi jangan khawatir! Anda bisa memintanya di prompt berikutnya! 🚀",
      duration: 4000,
    });
  };
  const InputField = ({ label, name, value, onChange, placeholder, required = false, type = "text" }) => (
    <div>
      <label className="block text-white font-semibold mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition"
      />
    </div>
  );

  const InfoCard = ({ title, description, icon: Icon, button }) => (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center shadow-lg">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-6 text-sm">{description}</p>
      <Button
        onClick={button.onClick}
        size="lg"
        className={`bg-${button.color}-600 hover:bg-${button.color}-700 text-white w-full px-6 py-3 font-semibold rounded-xl shadow-md hover:scale-105 transition`}
      >
        <Icon className="w-5 h-5 mr-2" />
        {button.text}
      </Button>
    </div>
  );

  const ContactDetail = ({ icon: Icon, title, value }) => (
    <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <div className="text-white font-semibold">{title}</div>
        <div className="text-gray-300 text-sm">{value}</div>
      </div>
    </div>
  );

  return (
    <section className="py-24 relative overflow-hidden bg-black text-white font-sans">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Judul CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Siap <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Transformasi</span> Digital Anda?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hubungi kami sekarang — saat yang tepat untuk memulai pertumbuhan digital Anda.
          </p>
        </motion.div>

        {/* Konten Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Formulir */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-10 shadow-2xl"
          >
            <h3 className="text-3xl font-semibold mb-4">Konsultasi <span className="text-blue-300">Gratis</span></h3>
            <p className="text-sm text-gray-300 mb-8">Kami siap mendengarkan dan bantu mewujudkan strategi digital Anda.</p>

            <form onSubmit={handleSubmit} className="space-y-6 text-sm">
              <div className="grid md:grid-cols-2 gap-6">
                <InputField label="Nama Lengkap *" name="name" value={formData.name} onChange={handleInputChange} placeholder="Nama Anda" required />
                <InputField label="Email *" name="email" value={formData.email} onChange={handleInputChange} placeholder="email@example.com" required type="email" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <InputField label="No. WhatsApp *" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="08xxxxxxxxxx" required type="tel" />
                <div>
                  <label className="block text-white font-semibold mb-2">Layanan yang Diminati</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-400 focus:bg-white/15 transition"
                  >
                    <option value="">Pilih layanan</option>
                    {services.map((s, i) => (
                      <option key={i} value={s} className="bg-gray-800">{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Ceritakan Project Anda</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition resize-none"
                  placeholder="Jelaskan singkat tentang goals, audiens, ekspektasi..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 font-semibold rounded-xl transition-all shadow-xl hover:scale-105">
                <Send className="w-5 h-5 mr-3" />
                Kirim Konsultasi Gratis
              </Button>
            </form>
          </motion.div>

          {/* Info Kontak */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <InfoCard
              title="Butuh Respon Cepat?"
              description="Klik tombol di bawah untuk langsung ngobrol dengan tim kami via WhatsApp!"
              icon={MessageCircle}
              button={{
                text: 'Chat WhatsApp Sekarang',
                onClick: handleWhatsAppClick,
                color: 'green'
              }}
            />

            <ContactDetail icon={Phone} title="Telepon" value="+62 812-3456-7890" />
            <ContactDetail icon={Mail} title="Email" value="hello@benerunpro.com" />
            <ContactDetail icon={MapPin} title="Lokasi" value="Jakarta, Indonesia" />
            <ContactDetail icon={Clock} title="Jam Operasional" value="Senin - Sabtu: 09.00 - 18.00" />

            <div className="bg-white/5 backdrop-blur-md border border-green-400/30 rounded-2xl p-6 text-center">
              <div className="text-green-400 font-bold text-base mb-2">✅ 100% Satisfaction Guarantee</div>
              <p className="text-gray-300 text-sm">
                Tidak puas? Kami revisi hingga Anda benar-benar puas. Garansi hasil nyata!
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Bawah */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-12 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Jangan Lewatkan Momentum Ini</h3>
            <p className="text-md md:text-lg text-gray-300 max-w-xl mx-auto mb-6">
              Setiap detik berarti dalam dunia digital. Yuk mulai transformasi Anda sekarang juga.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button onClick={handleWhatsAppClick} size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 font-semibold rounded-xl shadow-lg hover:scale-105 transition">
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Sekarang
              </Button>
              <Button onClick={handleSubmit} variant="outline" size="lg" className="border border-blue-400/50 text-white hover:bg-blue-600/20 px-8 py-4 font-semibold rounded-xl shadow-lg hover:scale-105 transition">
                Lihat Portfolio Lengkap
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

  // Komponen bantu (rekomendasi pisahkan ke file util):


};

export default CTASection;
