import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import about from '../assets/me.png'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Masum Reza
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600">
              Front-End Developer (React, JavaScript)
            </p>

            <p className="text-lg text-gray-500 max-w-xl">
             Specializing in React and JavaScript with 3+ years of hands-on experience in modern UI architecture, performance optimization, and off-main-thread processing using Web Workers and Service Workers.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>

              <a
                href="#projects"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
              >
                View Work
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/masum011"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/masum-reza-148397199/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:masumre1010@gmail.com"
                className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              src={about}
              alt="Developer workspace"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <ArrowDown className="text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
}
