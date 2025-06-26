import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Calendar, CheckCircle, Star, Users, Award, BookOpen, Heart, Target, Brain, Globe } from 'lucide-react';
import profilePhoto from './assets/images/img1.png'
import secondaryPhoto from './assets/images/img2.png'; // adjust the path if needed

//import profilePhoto from './assets/images/img2.avif' // Adjust the path based on your project structure

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white/95'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-800">
              Dr. Naveen Kumar
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Approach', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Welcome!
                </h1>
                <h2 className="text-2xl lg:text-3xl text-blue-600 font-semibold">
                  I'm Dr. Naveen Kumar Vishnoi
                </h2>
                <p className="text-xl text-slate-600 font-medium">
                  Step Into Clarity and Confidence
                </p>
              </div>
             
              <p className="text-lg text-slate-700 leading-relaxed max-w-2xl">
                An educator, mentor, and life coach dedicated to helping you achieve
                personal transformation, emotional strength, and purposeful living through
                evidence-based approaches and compassionate guidance.
              </p>
             
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Book a Session
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Content - Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl shadow-2xl border-4 border-white flex items-center justify-center">
                  <img
                    src={profilePhoto}
                    alt="Professional Portrait"
                    className="w-64 h-80 object-cover rounded-xl shadow-lg"
/>

                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-slate-300 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
       
        {/* Scroll Indicator */}
        <div className="text-center mt-8">
          <ChevronDown size={32} className="text-blue-500 animate-bounce mx-auto" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Left Column - Second Photo */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="w-full h-80 bg-gradient-to-br from-slate-100 to-blue-50 rounded-2xl shadow-lg border-2 border-slate-200 flex items-center justify-center">
                  <img
                    src={secondaryPhoto}
                    alt="Academic or Workplace Setting"
                    className="w-full h-full object-cover rounded-2xl"
/>

                </div>
              </div>
            </div>

            {/* Right Columns - Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-50 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <BookOpen size={32} className="text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-slate-900">Professional Background</h3>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  With a solid academic foundation and decades of mentoring experience, I offer a unique
                  blend of intellectual insight and emotional understanding. My career in management
                  education has shaped my holistic and people-centered approach to life coaching.
                </p>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Heart size={32} className="text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-slate-900">My Journey</h3>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  My journey began in academia, guiding students and professionals toward clarity and
                  direction. Over time, I realized that many challenges are less about knowledge and
                  more about mindset, emotions, and choices — and that's where life coaching became my mission.
                </p>
              </div>
            </div>
          </div>

          {/* Credentials */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Award size={48} className="text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-2">PhD in Management</h4>
              <p className="text-slate-600">Advanced academic foundation</p>
            </div>
            <div className="text-center p-6 bg-slate-50 rounded-xl">
              <Users size={48} className="text-slate-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-2">20+ Years Experience</h4>
              <p className="text-slate-600">Education & mentoring expertise</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Brain size={48} className="text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-2">Behavioral Science</h4>
              <p className="text-slate-600">Research-based methodologies</p>
            </div>
          </div>

          {/* Why Choose Me */}
          <div className="bg-slate-900 text-white p-12 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-6">Why Choose Me?</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
              I offer a calm, structured, and empathetic coaching space tailored to your goals and
              personality. No gimmicks — just honest conversations, clear strategies, and real progress
              towards the life you want to live.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">My Approach</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Methodologies Used</h3>
              <div className="space-y-4">
                {[
                  'Behavioral and cognitive strategies based on research',
                  'Reflective listening and goal-focused dialogue',
                  'Mindfulness practices to improve self-awareness',
                  'Tools from emotional intelligence and leadership coaching'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Philosophy of Coaching</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                I believe every individual has the inner resources to overcome challenges and evolve.
                My coaching helps you unlock that potential with structure, empathy, and practical steps.
              </p>
             
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-4">What to Expect</h4>
                <div className="space-y-3">
                  {[
                    'A confidential, supportive, and respectful environment',
                    'Encouraging yet honest feedback',
                    'Strategies personalized to your life context',
                    'Clear action plans with regular reflection'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Services Offered</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          </div>

          {/* Service Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-slate-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-200 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">One-on-One Coaching</h3>
              <p className="text-slate-600 leading-relaxed">Private sessions focused on your unique life goals, whether personal or professional.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-200 group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Group Sessions</h3>
              <p className="text-slate-600 leading-relaxed">Collaborative learning through discussion and exercises — ideal for self-growth topics.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-200 group">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen size={24} className="text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Workshops & Seminars</h3>
              <p className="text-slate-600 leading-relaxed">Live sessions on emotional intelligence, career development, and leadership growth.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-200 group">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Globe size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Online Coaching</h3>
              <p className="text-slate-600 leading-relaxed">Accessible coaching sessions from anywhere — flexible, focused, and impactful.</p>
            </div>
          </div>

          {/* Specializations */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Specializations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Stress & Anxiety Management',
                  description: 'Learn to respond to life\'s pressures with calm and composure through evidence-based techniques.',
                  emoji: '🧘'
                },
                {
                  title: 'Confidence & Self-Esteem',
                  description: 'Strengthen your inner foundation and overcome self-doubt by building authentic self-worth.',
                  emoji: '💪'
                },
                {
                  title: 'Emotional Healing & Wellbeing',
                  description: 'Make peace with the past and build emotional resilience through compassionate self-work.',
                  emoji: '❤️'
                },
                {
                  title: 'Personal Growth & Resilience',
                  description: 'Create meaningful goals and pursue them with energy while developing strength to overcome obstacles.',
                  emoji: '🌱'
                },
                {
                  title: 'Relationship Coaching',
                  description: 'Build healthier relationships through better communication and emotional understanding.',
                  emoji: '🤝'
                },
                {
                  title: 'Career & Life Transitions',
                  description: 'Navigate life\'s turning points with confidence and clarity for successful transitions.',
                  emoji: '🚀'
                }
              ].map((spec, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-2xl hover:bg-blue-50 transition-colors duration-200">
                  <div className="text-3xl mb-4">{spec.emoji}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{spec.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded mb-6"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to take the next step? Let's schedule a conversation and explore how we can work together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-slate-800 rounded-2xl">
              <Mail size={32} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-slate-300">naveen@lifecoaching.com</p>
            </div>
            <div className="text-center p-8 bg-slate-800 rounded-2xl">
              <Phone size={32} className="text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-slate-300">+91 98765 43210</p>
            </div>
            <div className="text-center p-8 bg-slate-800 rounded-2xl">
              <Calendar size={32} className="text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Schedule</h3>
              <p className="text-slate-300">Mon-Fri: 9 AM - 6 PM</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
              Book Your Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-400">
            © 2025 Dr. Naveen Kumar Vishnoi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;