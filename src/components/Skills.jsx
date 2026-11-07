import { Layout, Layers, Zap, Server, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      'React',
      'Next.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Material UI',
      'Ant Design',
      'React Router',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'State & Data',
    icon: Layers,
    skills: [
      'Redux Toolkit',
      'Redux',
      'Context API',
      'Axios',
      'REST APIs',
      'Authentication Flows',
      'Form Validation',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Performance & Browser APIs',
    icon: Zap,
    skills: [
      'React.memo',
      'useMemo / useCallback',
      'Lazy Loading',
      'Code Splitting',
      'IndexedDB',
      'Web Workers',
      'Service Workers',
    ],
    color: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Backend & Databases',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Figma',
      'Jira',
      'Firebase (basic)',
      'Deployment & Staging',
    ],
    color: 'from-slate-500 to-gray-700',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                  style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                ></div>

                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center text-gray-600 group-hover:text-gray-900 transition-colors duration-300"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
