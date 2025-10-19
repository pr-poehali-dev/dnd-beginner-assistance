import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const sections = [
  {
    id: 'rules',
    title: 'Правила',
    description: 'Основные механики и правила игры',
    icon: 'BookOpen',
    color: 'from-primary to-purple-600'
  },
  {
    id: 'characters',
    title: 'Персонажи',
    description: 'Создание и развитие героев',
    icon: 'Users',
    color: 'from-secondary to-amber-600'
  },
  {
    id: 'classes',
    title: 'Классы',
    description: 'Воины, маги, плуты и другие',
    icon: 'Swords',
    color: 'from-accent to-red-600'
  },
  {
    id: 'races',
    title: 'Расы',
    description: 'Эльфы, дворфы, люди и не только',
    icon: 'Crown',
    color: 'from-primary to-indigo-600'
  },
  {
    id: 'spells',
    title: 'Заклинания',
    description: 'Магические способности и ритуалы',
    icon: 'Sparkles',
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'equipment',
    title: 'Снаряжение',
    description: 'Оружие, доспехи и артефакты',
    icon: 'Shield',
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'guides',
    title: 'Гайды',
    description: 'Советы для начинающих игроков',
    icon: 'Map',
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'faq',
    title: 'FAQ',
    description: 'Часто задаваемые вопросы',
    icon: 'HelpCircle',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'contacts',
    title: 'Контакты',
    description: 'Свяжитесь с нами',
    icon: 'Mail',
    color: 'from-rose-500 to-pink-600'
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/80">
      <div 
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.85)), url('https://cdn.poehali.dev/projects/a03e1018-a1b8-4dd0-ae61-a7d56755e339/files/7b1b1300-83da-4815-89a0-d5a2922ab454.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background"></div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="mb-6 inline-block">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-glow">
              <Icon name="Flame" size={40} className="text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-cinzel font-bold mb-4 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
            Dungeons & Dragons
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-merriweather max-w-2xl mx-auto">
            Твой путеводитель в мир приключений, магии и легенд
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-lg px-8 py-6 font-cinzel"
            onClick={() => document.getElementById('sections')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Scroll" size={20} className="mr-2" />
            Начать путешествие
          </Button>
        </div>
      </div>

      <div id="sections" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-cinzel font-bold text-center mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          Разделы справочника
        </h2>
        <p className="text-center text-muted-foreground mb-12 font-merriweather max-w-2xl mx-auto">
          Выбери интересующий раздел, чтобы узнать больше о мире D&D
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <Card 
              key={section.id}
              className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-border/50 bg-card/80 backdrop-blur animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveSection(section.id)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative">
                <div className={`w-16 h-16 mb-4 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center group-hover:animate-glow transition-all duration-300`}>
                  <Icon name={section.icon as any} size={32} className="text-white" />
                </div>
                
                <CardTitle className="text-2xl font-cinzel group-hover:text-primary transition-colors">
                  {section.title}
                </CardTitle>
                <CardDescription className="font-merriweather text-base">
                  {section.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative">
                <Button 
                  variant="ghost" 
                  className={`w-full justify-between group-hover:bg-primary/10 transition-colors font-cinzel ${
                    activeSection === section.id ? 'bg-primary/10' : ''
                  }`}
                >
                  Узнать больше
                  <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div 
        className="relative py-20 bg-cover bg-center mt-16"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.9), rgba(26, 31, 44, 0.95)), url('https://cdn.poehali.dev/projects/a03e1018-a1b8-4dd0-ae61-a7d56755e339/files/5b6b5911-a5ac-4a70-99ef-6f293fc20f80.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <Icon name="Book" size={60} className="mx-auto mb-6 text-secondary" />
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-4 text-foreground">
            Готов начать свое приключение?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 font-merriweather max-w-2xl mx-auto">
            D&D — это бесконечные возможности для творчества, дружбы и эпических историй. Присоединяйся к миллионам игроков по всему миру!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 font-cinzel">
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="font-cinzel border-secondary text-secondary hover:bg-secondary/10">
              <Icon name="Users" size={20} className="mr-2" />
              Найти группу
            </Button>
          </div>
        </div>
      </div>

      <footer className="border-t border-border/50 py-8 mt-16 bg-card/30 backdrop-blur">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <Icon name="Scroll" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Icon name="Shield" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Icon name="Sparkles" size={24} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          </div>
          <p className="text-sm text-muted-foreground font-merriweather">
            © 2024 D&D Справочник для новичков. Отправляйся в приключение! ⚔️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
