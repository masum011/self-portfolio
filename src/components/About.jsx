import { Code2, Palette, Zap } from 'lucide-react';
import aboutme from  '../assets/aboutme.png'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <img
              src={aboutme}
              alt="Working environment"
              className="relative rounded-2xl shadow-xl w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I build modern web applications with a strong emphasis on clean code architecture, scalable UI design, and maintainable component systems.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              My work includes performance optimization such as reducing render cycles, improving load times, and using Web Workers and Service Workers for background processing and caching.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform transition-transform">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="text-blue-600" size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Clean Code</h3>
                <p className="text-sm text-gray-600">Writing maintainable, scalable code</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform transition-transform">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="text-cyan-600" size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Design</h3>
                <p className="text-sm text-gray-600">Pixel-perfect UI/UX implementation</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-2 transform transition-transform">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-blue-600" size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Performance</h3>
                <p className="text-sm text-gray-600">Optimized for speed & efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
