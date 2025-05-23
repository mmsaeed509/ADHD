'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrainCircuit, CalendarDays, Smile, Target, ArrowRight, Menu, X } from 'lucide-react';

// Color Palette Definition:
// Background: bg-stone-50 (#fafaf9)
// Text (Primary): text-slate-800 (#1e293b)
// Text (Secondary): text-slate-500 (#64748b)
// Primary Action: bg-orange-500 (#f97316)
// Accent Colors for Icons:
// - Blue: bg-blue-100, text-blue-600, border-blue-200
// - Green: bg-green-100, text-green-600, border-green-200
// - Yellow: bg-yellow-100, text-yellow-600, border-yellow-200
// - Pink: bg-pink-100, text-pink-600, border-pink-200

interface ClayIconProps {
  IconComponent: React.FC<{ className?: string }>;
  label: string;
  colorClasses: string;
  delay?: number;
}

const ClayIcon: React.FC<ClayIconProps> = ({ IconComponent, label, colorClasses, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-y-3"
    >
      <div className={`relative w-24 h-24 rounded-3xl shadow-lg transition-transform duration-300 hover:-translate-y-2 ${colorClasses}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <IconComponent className="w-10 h-10" />
        </div>
      </div>
      <p className="font-medium text-slate-600 text-sm text-center">{label}</p>
    </motion.div>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['Features', 'Testimonials', 'Pricing', 'FAQ'];

  const iconFeatures = [
    {
      Icon: BrainCircuit,
      label: 'Sharpen Focus',
      color: 'bg-blue-100 text-blue-600 border-b-4 border-blue-200 hover:bg-blue-200',
    },
    {
      Icon: Target,
      label: 'Build Habits',
      color: 'bg-yellow-100 text-yellow-600 border-b-4 border-yellow-200 hover:bg-yellow-200',
    },
    {
      Icon: CalendarDays,
      label: 'Master Planning',
      color: 'bg-green-100 text-green-600 border-b-4 border-green-200 hover:bg-green-200',
    },
    {
      Icon: Smile,
      label: 'Regulate Emotions',
      color: 'bg-pink-100 text-pink-600 border-b-4 border-pink-200 hover:bg-pink-200',
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-slate-800">
      {/* Header */}
      <header className="relative z-10 py-4 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <a href="#" className="flex items-center gap-2">
              <span className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-orange-400" />
              </span>
              <span className="font-bold text-xl">NeuroThrive</span>
            </a>
          </motion.div>
          <nav className="hidden lg:flex items-center gap-x-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href="#"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="text-slate-500 hover:text-orange-500 transition-colors duration-300"
              >
                {link}
              </motion.a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="hidden lg:block bg-orange-500 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Enroll Now
            </motion.button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-md text-slate-800 hover:bg-slate-100">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-stone-100 overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-y-4 py-6">
              {navLinks.map((link) => (
                <a key={link} href="#" className="text-slate-600 hover:text-orange-500 text-lg">{link}</a>
              ))}
              <button className="mt-4 bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300">
                Enroll Now
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 bg-orange-100 text-orange-600 font-semibold px-4 py-1 rounded-full text-sm"
            >
              A New Approach to ADHD Management
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Turn Distraction into Your <span className="text-orange-500">Superpower</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 max-w-xl text-lg text-slate-500"
            >
              Our science-backed course helps you understand your unique brain, build lasting habits, and transform ADHD challenges into strengths for a more focused and fulfilling life.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4"
            >
              <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-x-2 bg-slate-800 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
                Start Your Journey <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#" className="w-full sm:w-auto text-slate-600 font-semibold px-6 py-4 hover:text-orange-500 transition-colors duration-300">
                Watch a Preview
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="mt-8 flex items-center gap-x-4"
            >
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-gray-200 border-2 border-dashed" />
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-gray-200 border-2 border-dashed" />
                <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white bg-gray-200 border-2 border-dashed" />
              </div>
              <p className="text-sm text-slate-500">
                <span className="font-bold text-slate-700">10,000+</span> students thriving.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Clay Icons */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {iconFeatures.map((feature, index) => (
                <ClayIcon
                  key={feature.label}
                  IconComponent={feature.Icon}
                  label={feature.label}
                  colorClasses={feature.color}
                  delay={0.8 + index * 0.2}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
