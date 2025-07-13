'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, CheckCircle, TrendingUp, Rocket } from 'lucide-react';
import { wrap } from 'popmotion';

// --- DATA ---
const testimonials = [
  {
    id: 1,
    name: 'Sarah Wijaya',
    position: 'Founder, Bella Fashion',
    image: 'https://images.unsplash.com/photo-1579352820253-29a83e08f654?w=500&auto=format&fit=crop&q=80',
    text: 'The Benerun Pro team completely transformed our social media. In 2 months, engagement increased by 400%, and online sales rose dramatically. Highly professional and creative!',
    result: { value: '+400%', label: 'Engagement' }
  },
  {
    id: 2,
    name: 'Ahmad Rizki',
    position: 'Marketing Director, TechStart ID',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80',
    text: 'The website they built is not only beautiful, but its conversion rate is outstanding. It went from 2.1% to 12.8%! A highly profitable ROI for our business.',
    result: { value: '+509%', label: 'Conversion Rate' }
  },
  {
    id: 3,
    name: 'Maya Sari',
    position: 'Owner, Healthy Bites Cafe',
    image: 'https://images.unsplash.com/photo-1556742517-832a8b9a05b3?w=500&auto=format&fit=crop&q=80',
    text: 'The video content created by the Benerun team is incredibly engaging! Our Reels often go viral, and new customers keep coming. The best marketing investment.',
    result: { value: '+300%', label: 'Organic Reach' }
  },
  {
    id: 4,
    name: 'Lisa Permata',
    position: 'Brand Manager, Glow Beauty',
    image: 'https://images.unsplash.com/photo-1552960505-1a2c77a942a5?w=500&auto=format&fit=crop&q=80',
    text: 'Benerun Pro\'s content strategy skyrocketed our brand awareness. Followers grew by 250% in 3 months, and brand recognition increased significantly.',
    result: { value: '+250%', label: 'Follower Growth' }
  }
];

const summaryStats = [
  { icon: Heart, number: '150+', label: 'Happy Clients' },
  { icon: CheckCircle, number: '4.9/5', label: 'Average Rating' },
  { icon: TrendingUp, number: '320%', label: 'Average Growth' },
  { icon: Rocket, number: '98%', label: 'Client Retention' }
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const TestimonialSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const testimonialIndex = wrap(0, testimonials.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [page]);


  return (
    <section id='testimonials' className="relative py-24 md:py-32 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:36px_36px]"
          style={{ maskImage: 'radial-gradient(ellipse at center, white 20%, transparent 70%)' }}
        />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-[120px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from clients who have experienced incredible growth with us.
          </p>
        </motion.div>

        <div className="relative h-[550px] md:h-[450px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-[90%] md:w-3/4 lg:w-1/2"
            >
              <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl flex flex-col md:flex-row items-center gap-8">
                <motion.img
                  src={testimonials[testimonialIndex].image}
                  alt={testimonials[testimonialIndex].name}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-sky-400/50 flex-shrink-0"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, transition: { delay: 0.2, duration: 0.4 } }}
                />
                <div className="text-center md:text-left">
                  <p className="text-lg text-gray-200 leading-relaxed mb-4">"{testimonials[testimonialIndex].text}"</p>
                  <h3 className="text-xl font-bold text-white">{testimonials[testimonialIndex].name}</h3>
                  <p className="text-sky-300 font-medium">{testimonials[testimonialIndex].position}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 md:px-0">
            <button onClick={() => paginate(-1)} className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={() => paginate(1)} className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setPage([i, i > page ? 1 : -1])} className="w-3 h-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors">
              {i === testimonialIndex && (
                <motion.div layoutId="activeDot" className="w-full h-full rounded-full bg-sky-400" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
          {summaryStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-white/5 p-4 rounded-xl border border-white/10 text-center"
            >
              <stat.icon className="w-7 h-7 mx-auto mb-2 text-sky-400" />
              <div className="text-2xl font-bold text-white">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;