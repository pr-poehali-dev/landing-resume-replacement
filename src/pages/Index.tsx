import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: 'React', level: 95, icon: '⚛️' },
    { name: 'TypeScript', level: 90, icon: '📘' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'UI/UX', level: 88, icon: '🎨' },
    { name: 'PostgreSQL', level: 80, icon: '🐘' },
    { name: 'Git', level: 92, icon: '🔀' }
  ];

  const achievements = [
    { number: '50+', label: 'Проектов запущено', icon: 'Rocket', color: 'from-blue-500 to-cyan-500' },
    { number: '5+', label: 'Лет в разработке', icon: 'Award', color: 'from-purple-500 to-pink-500' },
    { number: '200K+', label: 'Строк кода', icon: 'Code', color: 'from-orange-500 to-red-500' },
    { number: '99%', label: 'Довольных клиентов', icon: 'Heart', color: 'from-green-500 to-emerald-500' }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      description: 'Возглавил команду из 4 человек. Переписали легаси на TypeScript, внедрили микрофронтенды.',
      highlight: '45% рост производительности'
    },
    {
      year: '2022',
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      description: 'Разрабатывал веб-приложения для e-commerce, fintech, edtech. От дизайна до деплоя.',
      highlight: '15 проектов в продакшен'
    },
    {
      year: '2020',
      title: 'Junior Frontend Developer',
      company: 'StartupLab',
      description: 'Первый опыт в коммерческой разработке. Создавал MVP для стартапов, учился на практике.',
      highlight: 'Повышение через 8 месяцев'
    },
    {
      year: '2019',
      title: 'Начало пути',
      company: 'МГУ + Самообучение',
      description: 'Закончил университет по специальности "Прикладная математика", начал изучать веб-разработку.',
      highlight: 'Первый проект на React'
    }
  ];

  const projects = [
    {
      title: 'Корпоративная CRM',
      emoji: '📊',
      description: 'Система управления клиентами и сделками для компании с 500+ сотрудников',
      tech: ['React', 'TypeScript', 'WebSocket', 'PostgreSQL'],
      impact: '40% рост продаж',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'E-commerce платформа',
      emoji: '🛍️',
      description: 'Маркетплейс с каталогом 50K товаров, корзиной, оплатой и рекомендациями',
      tech: ['Next.js', 'Redux', 'Stripe', 'AI'],
      impact: '$2M GMV за год',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Образовательная платформа',
      emoji: '🎓',
      description: 'Онлайн-школа с видеокурсами, тестами, сертификатами и геймификацией',
      tech: ['React', 'Video API', 'Analytics', 'Gamification'],
      impact: '5K студентов',
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent)`
        }}
      />

      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className={`relative z-10 text-center max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="mb-8 inline-block relative">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-12 h-12 rounded-full border-4 border-slate-950 flex items-center justify-center">
              <span className="text-xl">✨</span>
            </div>
          </div>

          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Открыт для новых возможностей</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none">
            Алексей
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Романов
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-400 mb-4 font-light">
            Senior Frontend Developer
          </p>
          
          <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            Превращаю идеи в живые веб-приложения. Пишу чистый код, который работает быстро и масштабируется легко.
            <span className="text-purple-400"> Создаю продукты, которыми хочется пользоваться.</span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl shadow-purple-500/50 gap-2 text-lg px-10 py-6">
              <Icon name="Mail" size={22} />
              Написать мне
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/20 hover:bg-white/5 backdrop-blur-sm gap-2 text-lg px-10 py-6">
              <Icon name="Download" size={22} />
              Скачать резюме
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <a href="#" className="text-gray-400 hover:text-white transition-all hover:scale-110">
              <Icon name="Github" size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all hover:scale-110">
              <Icon name="Linkedin" size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all hover:scale-110">
              <Icon name="Twitter" size={28} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-all hover:scale-110">
              <Icon name="Globe" size={28} />
            </a>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Достижения в цифрах
            </h2>
            <p className="text-xl text-gray-400">Результаты, которыми горжусь</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${achievement.color} p-1 hover:scale-105 transition-all duration-500`}
              >
                <div className="bg-slate-900 rounded-lg p-8 h-full">
                  <Icon name={achievement.icon as any} size={48} className="text-white mb-4 mx-auto" />
                  <div className="text-5xl font-black text-white mb-2 text-center">{achievement.number}</div>
                  <p className="text-gray-300 text-center font-medium">{achievement.label}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Навыки и технологии
            </h2>
            <p className="text-xl text-gray-400">То, что я использую каждый день</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                    <span className="text-xl font-bold">{skill.name}</span>
                  </div>
                  <span className="text-2xl font-bold text-purple-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Мой путь
            </h2>
            <p className="text-xl text-gray-400">От первой строки кода до Senior Developer</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="bg-slate-900/50 backdrop-blur border-white/10 p-8 hover:border-purple-500/50 transition-all duration-500 hover:scale-105">
                      <div className="text-5xl font-black text-purple-400 mb-3">{item.year}</div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-xl text-gray-400 mb-4 font-medium">{item.company}</p>
                      <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full">
                        <Icon name="TrendingUp" size={16} />
                        <span className="text-sm font-semibold text-purple-300">{item.highlight}</span>
                      </div>
                    </Card>
                  </div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 z-10 border-4 border-slate-950">
                    <Icon name="Star" size={28} className="text-white" />
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Избранные проекты
            </h2>
            <p className="text-xl text-gray-400">Работы, которыми действительно горжусь</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-slate-900/50 backdrop-blur border-white/10 hover:border-purple-500/50 overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                  <span className="text-8xl relative z-10 group-hover:scale-125 transition-transform duration-500">{project.emoji}</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-green-400 font-bold">
                    <Icon name="Zap" size={18} />
                    <span>{project.impact}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-50"></div>
            
            <Card className="relative bg-gradient-to-br from-slate-900 to-slate-800 border-white/20 p-12 md:p-16">
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                Давайте создадим
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  что-то крутое?
                </span>
              </h2>
              
              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Если вы ищете разработчика, который не просто пишет код, а создаёт продукты — напишите мне!
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-10">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 gap-2 text-lg px-10 py-6 shadow-2xl">
                  <Icon name="Mail" size={22} />
                  alexey.romanov@email.com
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white/20 hover:bg-white/5 gap-2 text-lg px-10 py-6">
                  <Icon name="Phone" size={22} />
                  +7 (999) 123-45-67
                </Button>
              </div>

              <div className="flex gap-6 justify-center">
                <a href="#" className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110">
                  <Icon name="Github" size={24} />
                </a>
                <a href="#" className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110">
                  <Icon name="Linkedin" size={24} />
                </a>
                <a href="#" className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110">
                  <Icon name="MessageCircle" size={24} />
                </a>
                <a href="#" className="w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110">
                  <Icon name="Globe" size={24} />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-10 px-4 border-t border-white/5 text-center text-gray-500">
        <p>© 2024 Алексей Романов. Сделано с ❤️ на React + TypeScript</p>
      </footer>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
