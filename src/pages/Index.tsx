import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    'Frontend': ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Redux', 'Zustand'],
    'Backend': ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST API', 'GraphQL'],
    'Tools': ['Git', 'Docker', 'CI/CD', 'Webpack', 'Vite', 'Jest', 'Figma']
  };

  const experience = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Frontend Developer',
      period: '2022 - настоящее время',
      description: 'Руководство командой из 4 разработчиков. Разработка и поддержка корпоративной CRM-системы на React/TypeScript.',
      achievements: [
        'Увеличил производительность приложения на 45% через оптимизацию рендеринга',
        'Внедрил дизайн-систему, сократив время разработки новых фич на 30%',
        'Провел 50+ code review и менторил 2 junior-разработчиков'
      ]
    },
    {
      company: 'Digital Agency Pro',
      position: 'Frontend Developer',
      period: '2020 - 2022',
      description: 'Разработка веб-приложений и лендингов для клиентов агентства. Работа с дизайнерами и backend-командой.',
      achievements: [
        'Разработал 15+ проектов от прототипа до продакшена',
        'Внедрил автоматизированное тестирование, снизив количество багов на 60%',
        'Оптимизировал SEO, повысив позиции клиентов в поисковой выдаче'
      ]
    },
    {
      company: 'StartupLab',
      position: 'Junior Frontend Developer',
      period: '2019 - 2020',
      description: 'Разработка пользовательских интерфейсов для MVP стартапов. Быстрая итерация и работа в условиях неопределенности.',
      achievements: [
        'Участвовал в разработке 8 MVP-проектов',
        'Освоил современный стек: React, TypeScript, Git',
        'Получил повышение через 8 месяцев работы'
      ]
    }
  ];

  const education = [
    {
      institution: 'Московский Государственный Университет',
      degree: 'Бакалавр, Прикладная математика и информатика',
      period: '2015 - 2019',
      icon: 'GraduationCap'
    },
    {
      institution: 'Онлайн-курсы',
      degree: 'Frontend Developer Professional, Udemy',
      period: '2019',
      icon: 'BookOpen'
    }
  ];

  const projects = [
    {
      name: 'Корпоративная CRM',
      role: 'Tech Lead',
      description: 'Система управления клиентами и продажами для компании с 500+ сотрудниками',
      tech: ['React', 'TypeScript', 'PostgreSQL', 'WebSocket'],
      impact: '40% рост эффективности отдела продаж'
    },
    {
      name: 'E-commerce платформа',
      role: 'Frontend Developer',
      description: 'Интернет-магазин с каталогом 50K+ товаров, корзиной и интеграцией платежей',
      tech: ['Next.js', 'Redux', 'Stripe API', 'Tailwind'],
      impact: 'GMV $2M+ в первый год'
    },
    {
      name: 'Аналитический дашборд',
      role: 'Fullstack Developer',
      description: 'Панель визуализации бизнес-метрик с real-time обновлениями',
      tech: ['React', 'Node.js', 'Chart.js', 'WebSocket'],
      impact: 'Используют 200+ пользователей ежедневно'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <header className={`bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-5xl font-bold flex-shrink-0">
              АР
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">Алексей Романов</h1>
              <p className="text-2xl text-blue-600 mb-4 font-medium">Senior Frontend Developer</p>
              
              <div className="flex flex-wrap gap-4 text-slate-600">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Москва</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>alexey.romanov@email.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </div>
              </div>
              
              <div className="flex gap-3 mt-4">
                <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                  <Icon name="Github" size={24} />
                </a>
                <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                  <Icon name="Linkedin" size={24} />
                </a>
                <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                  <Icon name="Globe" size={24} />
                </a>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 gap-2 flex-shrink-0">
              <Icon name="Download" size={20} />
              Скачать PDF
            </Button>
          </div>
        </header>

        <div className={`bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <Icon name="User" size={28} className="text-blue-600" />
            О себе
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Frontend-разработчик с 5+ годами опыта создания высоконагруженных веб-приложений. 
            Специализируюсь на React-экосистеме и современных подходах к разработке интерфейсов.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Имею опыт руководства командой, code review, менторинга junior-специалистов. 
            Люблю решать сложные задачи и создавать продукты, которые упрощают жизнь пользователям.
          </p>
        </div>

        <div className={`bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Icon name="Code" size={28} className="text-blue-600" />
            Навыки
          </h2>
          
          <div className="space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Icon name="Briefcase" size={28} className="text-blue-600" />
            Опыт работы
          </h2>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{job.position}</h3>
                    <p className="text-xl text-blue-600 font-medium">{job.company}</p>
                  </div>
                  <span className="text-slate-600 font-medium mt-2 md:mt-0">{job.period}</span>
                </div>
                
                <p className="text-slate-700 mb-3">{job.description}</p>
                
                <ul className="space-y-2">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700">
                      <Icon name="CheckCircle2" size={18} className="text-green-600 mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={`bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Icon name="FolderGit2" size={28} className="text-blue-600" />
            Ключевые проекты
          </h2>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index} className="border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{project.name}</h3>
                    <span className="text-blue-600 font-medium">{project.role}</span>
                  </div>
                </div>
                
                <p className="text-slate-700 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-green-700 font-semibold">
                  <Icon name="TrendingUp" size={18} />
                  <span>{project.impact}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className={`bg-white rounded-2xl shadow-lg p-8 md:p-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Icon name="GraduationCap" size={28} className="text-blue-600" />
            Образование
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={edu.icon as any} size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium">{edu.institution}</p>
                  <span className="text-slate-600">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer className="mt-8 text-center text-slate-600">
          <p>© 2024 Алексей Романов. Резюме создано с использованием React + TypeScript</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
