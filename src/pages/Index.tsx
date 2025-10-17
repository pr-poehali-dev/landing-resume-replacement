import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'UI/UX Design', 'Git'
  ];

  const projects = [
    {
      title: 'E-commerce платформа',
      description: 'Разработка полнофункционального интернет-магазина с корзиной и оплатой',
      tech: ['React', 'Node.js', 'Stripe'],
      icon: 'ShoppingCart'
    },
    {
      title: 'CRM система',
      description: 'Система управления клиентами для автоматизации бизнес-процессов',
      tech: ['TypeScript', 'PostgreSQL', 'REST API'],
      icon: 'Users'
    },
    {
      title: 'Аналитический дашборд',
      description: 'Интерактивная панель с визуализацией данных в реальном времени',
      tech: ['React', 'Chart.js', 'WebSocket'],
      icon: 'BarChart3'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className={`text-center max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Icon name="Code" size={64} className="text-purple-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Привет, я <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Алексей</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Frontend разработчик, который создает современные веб-приложения
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white gap-2">
              <Icon name="Send" size={20} />
              Связаться
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400/10 gap-2">
              <Icon name="FolderGit2" size={20} />
              Мои проекты
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Обо мне
            </h2>
            
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Frontend разработчик с опытом более 5 лет. Специализируюсь на создании быстрых и красивых веб-приложений с использованием современного стека технологий.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Моя цель — создавать продукты, которые не просто работают, а приносят радость пользователям. Всегда открыт к новым вызовам и интересным проектам.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Технологии
            </h2>
            
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 font-semibold hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Проекты
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon name={project.icon as any} size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Готов к сотрудничеству
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Есть интересный проект? Давайте обсудим!
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Icon name="Mail" size={20} />
                  Email
                </Button>
                <Button size="lg" variant="secondary" className="gap-2">
                  <Icon name="Github" size={20} />
                  GitHub
                </Button>
                <Button size="lg" variant="secondary" className="gap-2">
                  <Icon name="Linkedin" size={20} />
                  LinkedIn
                </Button>
                <Button size="lg" variant="secondary" className="gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Telegram
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-purple-500/20">
        <p>© 2024 Алексей. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;
