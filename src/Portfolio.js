import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Calendar, CheckCircle, Star, Users, Award, BookOpen, Heart, Target, Brain, Globe, MessageCircle } from 'lucide-react';
import portrait from 'C:/Users/ansar/Downloads/Rere/dr-naveen-portfolio/src/assets/images/img1.png'; 
import academicPhoto from 'C:/Users/ansar/Downloads/Rere/dr-naveen-portfolio/src/assets/images/img2.png'; 

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
      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-700' : 'bg-slate-900/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              Dr. Naveen Kumar Vishnoi
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Approach', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-400 bg-blue-500/20 border border-blue-400/30'
                      : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section - Darker, More Sophisticated */}
      <section id="home" className="pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center">
        {/* Dark Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/50 to-slate-900"></div>
        
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Sophisticated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Enhanced Typography */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                  ✨ Transform Your Life Journey
                </div>
                <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Welcome!
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-pulse">
                    Step Into
                  </span>
                  <span className="block text-4xl lg:text-5xl text-slate-300 font-medium mt-2">
                    Clarity & Confidence
                  </span>
                </h1>
                <h2 className="text-3xl lg:text-4xl text-blue-400 font-semibold">
                  I'm Dr. Naveen Kumar Vishnoi
                </h2>
                <p className="text-xl text-slate-400 font-medium">
                  Your Guide to Personal Transformation
                </p>
              </div>
             
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                An educator, mentor, and life coach dedicated to helping you achieve
                personal transformation, emotional strength, and purposeful living through
                evidence-based approaches and compassionate guidance.
              </p>
             
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 border border-blue-400/20"
                >
                  <span className="flex items-center justify-center">
                    Book a Session
                    <MessageCircle size={20} className="ml-2 group-hover:animate-bounce" />
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-blue-400/50 text-blue-300 hover:bg-blue-500/20 hover:text-white hover:border-blue-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm bg-white/5"
                >
                  Learn More
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-8 border-t border-slate-700/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">20+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-slate-400">Lives Transformed</div>
                </div>
                <div className="text-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-slate-400">Rated Excellence</div>
                </div>
              </div>
            </div>

            {/* Right Content - Enhanced Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Photo Container */}
                <div className="relative w-80 h-96 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl shadow-2xl border border-slate-600 overflow-hidden backdrop-blur-sm">
  {/* Image Container */}
  <div className="absolute inset-4 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl shadow-lg overflow-hidden border border-slate-500">
    <img 
      src={portrait} 
      alt="Professional Portrait" 
      className="w-full h-full object-cover rounded-2xl"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/50 to-transparent rounded-2xl"></div>
  </div>

  {/* Overlay Effects */}

</div>


                

                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10 scale-110"></div>
              </div>
            </div>
          </div>
        </div>
       
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-slate-400 text-sm">Scroll to explore</span>
            <ChevronDown size={32} className="text-blue-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section - Enhanced with Better Images */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Left Column - Enhanced Academic Photo */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl shadow-xl border-2 border-slate-200 overflow-hidden group">
                  {/* Academic Photo Placeholder */}
                  <div className="absolute inset-4 rounded-2xl overflow-hidden shadow-inner">
    <img 
      src={academicPhoto} 
      alt="Academic Portrait" 
      className="w-full h-full object-cover rounded-2xl"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-500/20 to-transparent rounded-2xl"></div>
  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-transparent transition-all duration-300 rounded-3xl"></div>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>

            {/* Right Columns - Enhanced Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 p-8 rounded-3xl shadow-lg border border-slate-200/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <BookOpen size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Professional Background</h3>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  With a solid academic foundation and decades of mentoring experience, I offer a unique
                  blend of intellectual insight and emotional understanding. My career in management
                  education has shaped my holistic and people-centered approach to life coaching.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50/50 p-8 rounded-3xl shadow-lg border border-blue-200/50">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <Heart size={24} className="text-blue-600" />
                  </div>
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

          {/* Enhanced Credentials */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg border border-blue-200 group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">PhD in Management</h4>
              <p className="text-slate-600">Advanced academic foundation</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-lg border border-slate-200 group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">20+ Years Experience</h4>
              <p className="text-slate-600">Education & mentoring expertise</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg border border-purple-200 group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Brain size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Behavioral Science</h4>
              <p className="text-slate-600">Research-based methodologies</p>
            </div>
          </div>

          {/* Enhanced Why Choose Me */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-12 rounded-3xl text-center shadow-2xl border border-slate-700">
            <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              Why Choose Me?
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto text-slate-300">
              I offer a calm, structured, and empathetic coaching space tailored to your goals and
              personality. No gimmicks — just honest conversations, clear strategies, and real progress
              towards the life you want to live.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Approach Section */}
      <section id="approach" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">My Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Methodologies Used</h3>
              <div className="space-y-4">
                {[
                  'Behavioral and cognitive strategies based on research',
                  'Reflective listening and goal-focused dialogue',
                  'Mindfulness practices to improve self-awareness',
                  'Tools from emotional intelligence and leadership coaching'
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <CheckCircle size={16} className="text-green-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">Philosophy of Coaching</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">
                I believe every individual has the inner resources to overcome challenges and evolve.
                My coaching helps you unlock that potential with structure, empathy, and practical steps.
              </p>
             
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-500 shadow-inner">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-2" />
                  What to Expect
                </h4>
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

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Services Offered</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded"></div>
          </div>

          {/* Enhanced Service Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Target, color: 'blue', title: 'One-on-One Coaching', desc: 'Private sessions focused on your unique life goals, whether personal or professional.' },
              { icon: Users, color: 'green', title: 'Group Sessions', desc: 'Collaborative learning through discussion and exercises — ideal for self-growth topics.' },
              { icon: BookOpen, color: 'yellow', title: 'Workshops & Seminars', desc: 'Live sessions on emotional intelligence, career development, and leadership growth.' },
              { icon: Globe, color: 'purple', title: 'Online Coaching', desc: 'Accessible coaching sessions from anywhere — flexible, focused, and impactful.' }
            ].map((service, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-3xl hover:shadow-xl transition-all duration-300 group border border-slate-200 hover:border-slate-300">
                <div className={`w-12 h-12 bg-${service.color}-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon size={24} className={`text-${service.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* Enhanced Specializations */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Specializations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Stress & Anxiety Management',
                  description: 'Learn to respond to life/s pressures with calm and composure through evidence-based techniques.',
                  emoji: '🧘',
                  color: 'blue'
                },
                {
                  title: 'Confidence & Self-Esteem',
                  description: 'Strengthen your inner foundation and overcome self-doubt by building authentic self-worth.',
                  emoji: '💪',
                  color: 'green'
                },
                {
                  title: 'Emotional Healing & Wellbeing',
                  description: 'Make peace with the past and build emotional resilience through compassionate self-work.',
                  emoji: '❤️',
                  color: 'red'
                },
                {
                  title: 'Personal Growth & Resilience',
                  description: 'Create meaningful goals and pursue them with energy while developing strength to overcome obstacles.',
                  emoji: '🌱',
                  color: 'emerald'
                },
                {
                  title: 'Relationship Coaching',
                  description: 'Build healthier relationships through better communication and emotional understanding.',
                  emoji: '🤝',
                  color: 'purple'
                },
                {
                  title: 'Career & Life Transitions',
                  description: 'Navigate life/s turning points with confidence and clarity for successful transitions.',
                  emoji: '🚀',
                  color: 'orange'
                }
              ].map((spec, index) => (
                <div key={index} className={`bg-slate-50 hover:bg-${spec.color}-50 p-6 rounded-3xl transition-all duration-300 border border-slate-200 hover:border-${spec.color}-200 hover:shadow-lg group`}>
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{spec.emoji}</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{spec.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded mb-6"></div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to take the next step? Let's schedule a conversation and explore how we can work together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-slate-800/50 rounded-3xl border border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-slate-300">naveen@lifecoaching.com</p>
            </div>
            <div className="text-center p-8 bg-slate-800/50 rounded-3xl border border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-slate-300">+91 98765 43210</p>
            </div>
            <div className="text-center p-8 bg-slate-800/50 rounded-3xl border border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Schedule</h3>
              <p className="text-slate-300">Mon-Fri: 9 AM - 6 PM</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 border border-blue-400/20">
              Book Your Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-8 bg-slate-950 text-white text-center border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-400">
                © 2025 Dr. Naveen Kumar Vishnoi. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <span className="text-slate-500 text-sm">Transform • Heal • Thrive</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;