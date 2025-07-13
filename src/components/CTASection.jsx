'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, Gem, ShieldCheck, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

// --- SERVICE LIST ---
const services = [
  'Web Design', 'Video Editing', 'Digital Strategy',
  'Copywriting', 'Sosmed Content', 'All-in-One'
];

// --- REUSABLE INPUT FIELD COMPONENT ---
const InputField = ({ label, name, value, onChange, placeholder, type = "text", as = "input", rows = 4 }) => {
  const commonProps = {
    name, value, onChange, placeholder,
    className: "w-full px-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition-all duration-300 resize-none"
  };
  const Component = as;
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-white/80 mb-2">{label}</label>
      <Component {...commonProps} {...(as === 'textarea' && { rows })} />
    </div>
  );
};

// --- MAIN CTA SECTION COMPONENT ---
const CTASection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [selectedServices, setSelectedServices] = useState([]);

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const toggleService = (s) => setSelectedServices((prev) => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || selectedServices.length === 0) {
      return toast({
        title: "Incomplete Form",
        description: "Please fill in your name, email, and select at least one service.",
        variant: "destructive"
      });
    }
    console.log({ ...formData, services: selectedServices });
    toast({
      title: "🚀 Request Sent!",
      description: `Thank you, ${formData.name}! We will contact you shortly.`,
    });
    setFormData({ name: '', email: '', message: '' });
    setSelectedServices([]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 text-white overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:36px_36px]"
          style={{ maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, white 0%, transparent 70%)' }}
        />
      </div>

      {/* Radial Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[150px]" />

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-start"
        >
          {/* --- LEFT COLUMN: PERSUASIVE CONTENT --- */}
          <motion.div variants={itemVariants} className="lg:pt-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight tracking-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-fuchsia-500">Elevate Your Business?</span>
            </h2>
            <p className="text-lg text-gray-300/80 mb-12 max-w-lg">
              Let's build something amazing together. Fill out the form to start a free, no-obligation consultation with our professional team.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-sky-500/20 to-fuchsia-500/20 flex items-center justify-center border border-white/10">
                  <Gem className="w-6 h-6 text-sky-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-white">Pixel-Perfect Execution</h3>
                  <p className="text-gray-400 mt-1">We are committed to delivering high-quality, polished results that exceed your expectations.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-sky-500/20 to-fuchsia-500/20 flex items-center justify-center border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-sky-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-white">Strategic Partnership</h3>
                  <p className="text-gray-400 mt-1">We are more than just a service provider; we are your dedicated partner in digital success.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-sky-500/20 to-fuchsia-500/20 flex items-center justify-center border border-white/10">
                  <TrendingUp className="w-6 h-6 text-sky-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-white">Data-Driven Growth</h3>
                  <p className="text-gray-400 mt-1">Our strategies are backed by data and analytics to ensure measurable results and continuous growth.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: CONTACT FORM --- */}
          <motion.div
            variants={itemVariants}
            className="relative bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl"
          >
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-1">Get in Touch</h3>
              <p className="text-gray-400 mb-6">Let's discuss your project.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <InputField label="Full Name *" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" />
                <InputField label="Email *" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" />
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">I'm interested in... *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map((s) => (
                      <motion.button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={`rounded-md border px-3 py-2 text-sm transition-all duration-200 ${selectedServices.includes(s)
                          ? 'bg-sky-500 text-white border-sky-500 font-semibold'
                          : 'bg-white/5 text-gray-300 border-white/20 hover:border-sky-400 hover:bg-sky-500/10'
                          }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {s}
                      </motion.button>
                    ))}
                  </div>
                </div>
                <InputField as="textarea" name="message" value={formData.message} onChange={handleInputChange} label="Tell us about your project (Optional)" placeholder="Details, goals, expectations..." />
                <Button type="submit" className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-sky-500 to-fuchsia-500 hover:from-sky-600 hover:to-fuchsia-600 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg">
                  Send Request <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;