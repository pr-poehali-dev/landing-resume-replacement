import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '50+', label: 'Проектов', icon: 'Briefcase' },
    { number: '5+', label: 'Лет опыта', icon: 'Calendar' },
    { number: '30+', label: 'Клиентов', icon: 'Users' },
    { number: '100%', label: 'Качество', icon: 'Award' }
  ];

  const services = [
    {
      icon: 'Layout',
      title: 'Веб-разработка',
      description: 'Создаю современные сайты и веб-приложения с нуля. От лендинга до сложных платформ.',
      features: ['React/TypeScript', 'Адаптивный дизайн', 'SEO оптимизация']
    },
    {
      icon: 'Smartphone',
      title: 'UI/UX дизайн',
      description: 'Проектирую интерфейсы, которые нравятся пользователям и работают на бизнес.',
      features: ['Прототипирование', 'Дизайн-система', 'Тестирование']
    },
    {
      icon: 'Database',
      title: 'Backend & API',
      description: 'Разрабатываю серверную логику и интеграции с любыми сервисами.',
      features: ['REST API', 'База данных', 'Безопасность']
    }
  ];

  const projects = [
    {
      title: 'Маркетплейс электроники',
      description: 'Полнофункциональный интернет-магазин с каталогом 10000+ товаров, корзиной, оплатой и личным кабинетом',
      image: '🛒',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      metrics: { users: '50K+', conversion: '+40%', time: '3 мес' }
    },
    {
      title: 'CRM для агентства недвижимости',
      description: 'Система управления сделками, клиентами и объектами. Автоматизация бизнес-процессов на 70%',
      image: '🏢',
      tech: ['TypeScript', 'REST API', 'WebSocket', 'PostgreSQL'],
      metrics: { users: '200+', efficiency: '+70%', time: '4 мес' }
    },
    {
      title: 'Образовательная платформа',
      description: 'Онлайн-школа с видеокурсами, тестами, вебинарами и системой геймификации',
      image: '🎓',
      tech: ['React', 'Video API', 'Analytics', 'Payment'],
      metrics: { students: '5K+', completion: '85%', time: '5 мес' }
    }
  ];

  const testimonials = [
    {
      name: 'Дмитрий Соколов',
      role: 'CEO, TechStart',
      text: 'Алексей сделал нам MVP за 3 недели. Сейчас у нас 10К пользователей и раунд инвестиций закрыт.',
      avatar: '👨‍💼'
    },
    {
      name: 'Елена Морозова',
      role: 'Основатель, Fashion Boutique',
      text: 'Продажи выросли в 2 раза после запуска нового сайта. Алексей учёл все пожелания и сделал больше.',
      avatar: '👩‍💼'
    },
    {
      name: 'Игорь Петров',
      role: 'CTO, FinanceApp',
      text: 'Профессионал своего дела. Чистый код, документация, уложился в сроки. Рекомендую!',
      avatar: '👨‍💻'
    }
  ];

  const process = [
    { step: '01', title: 'Обсуждение', desc: 'Разбираем задачу и бизнес-цели', icon: 'MessageSquare' },
    { step: '02', title: 'Прототип', desc: 'Показываю макет за 2-3 дня', icon: 'Figma' },
    { step: '03', title: 'Разработка', desc: 'Спринты по 1-2 недели с демо', icon: 'Code' },
    { step: '04', title: 'Запуск', desc: 'Тестирование и публикация', icon: 'Rocket' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5"></div>
        
        <div className={`relative z-10 text-center max-w-5xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-slate-950 rounded-full flex items-center justify-center">
                <span className="text-5xl">👨‍💻</span>
              </div>
            </div>
          </div>
          
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-purple-300 text-sm font-medium">Открыт для проектов</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
            Создаю продукты,<br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              которые работают
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Fullstack-разработчик, который превращает идеи в прибыльные веб-приложения. 
            <span className="text-purple-400 font-semibold"> От дизайна до запуска.</span>
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/50 gap-2 text-lg px-8">
              <Icon name="Send" size={20} />
              Обсудить проект
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-500/50 text-purple-300 hover:bg-purple-500/10 gap-2 text-lg px-8">
              <Icon name="Download" size={20} />
              Резюме
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-slate-900/50 backdrop-blur border-purple-500/20 p-6 hover:border-purple-500/50 transition-all duration-300">
                <Icon name={stat.icon as any} size={28} className="text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Что я делаю</h2>
            <p className="text-xl text-gray-400">Полный цикл разработки веб-проектов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur border-purple-500/20 p-8 hover:border-purple-400/60 transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={service.icon as any} size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-purple-300">
                      <Icon name="Check" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Избранные проекты</h2>
            <p className="text-xl text-gray-400">Кейсы, которыми горжусь</p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-r ${
                  index % 2 === 0 
                    ? 'from-purple-900/20 to-slate-900/50' 
                    : 'from-pink-900/20 to-slate-900/50'
                } backdrop-blur border-purple-500/30 overflow-hidden hover:border-purple-400/60 transition-all duration-500 group`}
              >
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-300 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-2xl font-bold text-purple-400">{value}</div>
                          <div className="text-sm text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="text-9xl group-hover:scale-110 transition-transform duration-500">
                      {project.image}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Как я работаю</h2>
            <p className="text-xl text-gray-400">Прозрачный процесс от идеи до запуска</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                )}
                
                <Card className="bg-slate-900/50 backdrop-blur border-purple-500/30 p-6 hover:border-purple-400/60 transition-all duration-300 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name={item.icon as any} size={24} className="text-white" />
                  </div>
                  <div className="text-4xl font-black text-purple-500/30 mb-2">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-400">Что говорят те, с кем работал</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-900/50 backdrop-blur border-purple-500/20 p-8 hover:border-purple-400/60 transition-all duration-300">
                <div className="text-5xl mb-4">{testimonial.avatar}</div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-purple-400">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Готов воплотить вашу идею?
              </h2>
              <p className="text-white/90 text-xl mb-10 leading-relaxed">
                Обсудим проект бесплатно. Отвечаю в течение часа.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 shadow-xl">
                  <Icon name="Mail" size={20} />
                  Email
                </Button>
                <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 shadow-xl">
                  <Icon name="MessageCircle" size={20} />
                  Telegram
                </Button>
                <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 shadow-xl">
                  <Icon name="Phone" size={20} />
                  Позвонить
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 justify-center">
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Icon name="Github" size={24} />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Icon name="Linkedin" size={24} />
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <Icon name="Twitter" size={24} />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 Алексей Романов. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
