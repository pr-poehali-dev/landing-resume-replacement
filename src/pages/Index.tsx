import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'PostgreSQL', level: 70 },
  ];

  const experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Corp',
      period: '2021 - Настоящее время',
      description: 'Разработка современных веб-приложений с использованием React и TypeScript',
      icon: 'Code2',
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2019 - 2021',
      description: 'Создание адаптивных интерфейсов и оптимизация производительности',
      icon: 'Laptop',
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Inc',
      period: '2017 - 2019',
      description: 'Участие в разработке MVP продуктов и внедрение новых технологий',
      icon: 'Rocket',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gradient-purple via-gradient-pink to-gradient-blue animate-gradient bg-[length:400%_400%]">
      <div className="container mx-auto px-4 py-16">
        <section className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/50 flex items-center justify-center mx-auto shadow-2xl animate-scale-in">
              <Icon name="User" size={64} className="text-white" />
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4 animate-fade-in">
            Иван Петров
          </h1>
          <p className="text-2xl text-white/90 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Frontend Developer & UI/UX Designer
          </p>
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="secondary" size="lg" className="gap-2">
              <Icon name="Mail" size={20} />
              Связаться
            </Button>
            <Button variant="outline" size="lg" className="gap-2 bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white/30">
              <Icon name="Download" size={20} />
              Скачать резюме
            </Button>
          </div>
        </section>

        <section className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl animate-slide-in-left">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="User" size={28} className="text-gradient-purple" />
              <h2 className="text-3xl font-bold text-gray-800">Обо мне</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Привет! Я Frontend разработчик с 6+ годами опыта создания современных веб-приложений. 
              Специализируюсь на React, TypeScript и создании интуитивных пользовательских интерфейсов. 
              Люблю превращать сложные задачи в простые и элегантные решения. Постоянно изучаю новые 
              технологии и делюсь знаниями с командой.
            </p>
            <div className="flex gap-3 mt-6">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Icon name="MapPin" size={16} className="mr-2" />
                Москва, Россия
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Icon name="Globe" size={16} className="mr-2" />
                Удаленная работа
              </Badge>
            </div>
          </Card>
        </section>

        <section className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl animate-slide-in-right">
            <div className="flex items-center gap-3 mb-8">
              <Icon name="Sparkles" size={28} className="text-gradient-pink" />
              <h2 className="text-3xl font-bold text-gray-800">Навыки</h2>
            </div>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-gradient-purple to-gradient-pink transition-all duration-1000 ease-out group-hover:opacity-80"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.1 + 0.5}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className={`mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <Icon name="Briefcase" size={28} className="text-gradient-blue" />
              <h2 className="text-3xl font-bold text-gray-800">Опыт работы</h2>
            </div>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <div
                  key={job.title}
                  className="relative pl-8 pb-8 border-l-2 border-gradient-purple/30 last:pb-0 group hover:border-gradient-purple transition-all duration-300"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-gradient-to-r from-gradient-purple to-gradient-pink flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon name={job.icon as any} size={16} className="text-white" />
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-x-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gradient-purple font-semibold">{job.company}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{job.period}</span>
                    </div>
                    <p className="text-gray-700">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="p-10 bg-gradient-to-r from-gradient-purple to-gradient-pink shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">Готов к новым проектам!</h2>
            <p className="text-white/90 mb-6 text-lg">
              Ищете опытного разработчика для вашей команды? Свяжитесь со мной!
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2 bg-white text-gradient-purple hover:bg-white/90">
                <Icon name="Github" size={20} />
                GitHub
              </Button>
              <Button size="lg" variant="secondary" className="gap-2 bg-white text-gradient-purple hover:bg-white/90">
                <Icon name="Linkedin" size={20} />
                LinkedIn
              </Button>
              <Button size="lg" variant="secondary" className="gap-2 bg-white text-gradient-purple hover:bg-white/90">
                <Icon name="Mail" size={20} />
                Email
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
