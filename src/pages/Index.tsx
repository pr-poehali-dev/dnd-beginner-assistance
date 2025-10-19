import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const characters = [
  {
    id: 1,
    name: 'Райдэн',
    element: 'Электро',
    rarity: 5,
    role: 'Саппорт / ДПС',
    color: 'from-purple-500 to-violet-600',
    materials: ['Амакумо', 'Свет', 'Хандгарды'],
    talents: 'Переходность → Тайна Мусо → Автоатака',
    image: 'https://cdn.poehali.dev/projects/a03e1018-a1b8-4dd0-ae61-a7d56755e339/files/3e136435-009e-4b69-a02a-804378adbfdb.jpg',
    teams: [
      { name: 'Национальная команда', members: ['Райдэн', 'Беннет', 'Сян Лин', 'Син Цю'] },
      { name: 'Гипер Райдэн', members: ['Райдэн', 'Кадзуха', 'Беннет', 'Сара'] },
      { name: 'Овервейп', members: ['Райдэн', 'Беннет', 'Син Цю', 'Сян Лин'] }
    ]
  },
  {
    id: 2,
    name: 'Ху Тао',
    element: 'Пиро',
    rarity: 5,
    role: 'Главный ДПС',
    color: 'from-red-500 to-orange-600',
    materials: ['Пылающий агат', 'Жук-сокровище', 'Слизь'],
    talents: 'Элем. навык → Взрыв → Автоатака',
    image: 'https://cdn.poehali.dev/projects/a03e1018-a1b8-4dd0-ae61-a7d56755e339/files/d77b5281-2641-431b-8db8-50682721c820.jpg',
    teams: [
      { name: 'Испарение', members: ['Ху Тао', 'Син Цю', 'Чжун Ли', 'Альбедо'] },
      { name: 'VV Испарение', members: ['Ху Тао', 'Син Цю', 'Кадзуха', 'Томá'] },
      { name: 'Мельт', members: ['Ху Тао', 'Розария', 'Кэйа', 'Диона'] }
    ]
  },
  {
    id: 3,
    name: 'Казуха',
    element: 'Анемо',
    rarity: 5,
    role: 'Саппорт',
    color: 'from-teal-500 to-cyan-600',
    materials: ['Магу Кэнки', 'Морской гриб', 'Казначей'],
    talents: 'Взрыв → Элем. навык → Автоатака',
    image: 'https://cdn.poehali.dev/projects/a03e1018-a1b8-4dd0-ae61-a7d56755e339/files/4d9f245a-7208-420e-b664-abbbd2c90e75.jpg',
    teams: [
      { name: 'Тазер', members: ['Кадзуха', 'Фишль', 'Бэй Доу', 'Кокоми'] },
      { name: 'Национальная', members: ['Кадзуха', 'Беннет', 'Сян Лин', 'Син Цю'] },
      { name: 'Фриз', members: ['Кадзуха', 'Аяка', 'Мона', 'Диона'] }
    ]
  },
  {
    id: 4,
    name: 'Нахида',
    element: 'Дендро',
    rarity: 5,
    role: 'Саппорт / ДПС',
    color: 'from-green-500 to-lime-600',
    materials: ['Квинтэссенция', 'Грибы', 'Гномы'],
    talents: 'Элем. навык → Взрыв → Автоатака',
    image: 'https://cdn.poehali.dev/projects/a03e1018-a1b8-4dd0-ae61-a7d56755e339/files/ac47f899-1fb1-4604-bfc4-03c1ed12adc3.jpg',
    teams: [
      { name: 'Гипер Блум', members: ['Нахида', 'Райдэн', 'Син Цю', 'Кукки Синобу'] },
      { name: 'Бёрджион', members: ['Нахида', 'Сян Лин', 'Беннет', 'Кадзуха'] },
      { name: 'Агграва', members: ['Нахида', 'Фишль', 'Кадзуха', 'Яо Яо'] }
    ]
  },
  {
    id: 5,
    name: 'Аяка',
    element: 'Крио',
    rarity: 5,
    role: 'Главный ДПС',
    color: 'from-blue-400 to-cyan-500',
    materials: ['Вечная мерзлота', 'Сакура', 'Хандгарды'],
    talents: 'Взрыв → Автоатака → Элем. навык',
    image: 'https://cdn.poehali.dev/projects/a03e1018-a1b8-4dd0-ae61-a7d56755e339/files/83594bd7-1bd5-43ff-a232-d2f2df960f17.jpg',
    teams: [
      { name: 'Заморозка', members: ['Аяка', 'Мона', 'Кадзуха', 'Диона'] },
      { name: 'Сун Ю', members: ['Аяка', 'Сун Ю', 'Сян Юнь', 'Фурина'] },
      { name: 'Вечная Заморозка', members: ['Аяка', 'Кокоми', 'Казуха', 'Сёнхе'] }
    ]
  },
  {
    id: 6,
    name: 'Еимия',
    element: 'Пиро',
    rarity: 5,
    role: 'Главный ДПС',
    color: 'from-red-400 to-pink-500',
    materials: ['Огненный агат', 'Сакура', 'Свитки'],
    talents: 'Автоатака → Элем. навык → Взрыв',
    image: 'https://cdn.poehali.dev/projects/a03e1018-a1b8-4dd0-ae61-a7d56755e339/files/b358d600-f6c7-4008-b4f4-e5119d8d9296.jpg',
    teams: [
      { name: 'Перегрузка', members: ['Еимия', 'Фишль', 'Бэй Доу', 'Беннет'] },
      { name: 'Испарение', members: ['Еимия', 'Син Цю', 'Беннет', 'Кадзуха'] },
      { name: 'Мельт', members: ['Еимия', 'Розария', 'Диона', 'Беннет'] }
    ]
  }
];

const levelingGuide = [
  {
    level: '1-20',
    mora: '24,200',
    exp: '120,175',
    materials: 'Опыт персонажа (зелёные книги)',
    boss: '—'
  },
  {
    level: '20-40',
    mora: '115,800',
    exp: '578,325',
    materials: 'Опыт + Материалы возвышения х3',
    boss: 'Камни элемента х1, Локальная диковинка х3'
  },
  {
    level: '40-50',
    mora: '116,000',
    exp: '579,100',
    materials: 'Опыт + Материалы возвышения х6',
    boss: 'Камни элемента х3, Локальная диковинка х10'
  },
  {
    level: '50-60',
    mora: '171,000',
    exp: '854,125',
    materials: 'Опыт + Материалы возвышения х6',
    boss: 'Камни элемента х6, Локальная диковинка х20'
  },
  {
    level: '60-70',
    mora: '239,200',
    exp: '1,195,925',
    materials: 'Опыт + Материалы возвышения х9',
    boss: 'Камни элемента х9, Локальная диковинка х30'
  },
  {
    level: '70-80',
    mora: '322,400',
    exp: '1,611,875',
    materials: 'Опыт + Материалы возвышения х12',
    boss: 'Камни элемента х12, Локальная диковинка х45'
  },
  {
    level: '80-90',
    mora: '684,800',
    exp: '3,423,125',
    materials: 'Опыт + Материалы возвышения х20',
    boss: 'Камни элемента х20, Локальная диковинка х60'
  }
];

const Index = () => {
  const [selectedElement, setSelectedElement] = useState<string>('Все');

  const elements = ['Все', 'Пиро', 'Гидро', 'Электро', 'Крио', 'Анемо', 'Гео', 'Дендро'];
  const elementColors: Record<string, string> = {
    'Пиро': 'bg-gradient-to-r from-red-500 to-orange-500',
    'Гидро': 'bg-gradient-to-r from-blue-500 to-cyan-500',
    'Электро': 'bg-gradient-to-r from-purple-500 to-violet-500',
    'Крио': 'bg-gradient-to-r from-blue-300 to-cyan-300',
    'Анемо': 'bg-gradient-to-r from-teal-400 to-cyan-400',
    'Гео': 'bg-gradient-to-r from-yellow-600 to-amber-600',
    'Дендро': 'bg-gradient-to-r from-green-500 to-lime-500',
  };

  const filteredCharacters = selectedElement === 'Все' 
    ? characters 
    : characters.filter(c => c.element === selectedElement);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 20, 40, 0.85), rgba(30, 20, 40, 0.9)), url('https://cdn.poehali.dev/projects/a03e1018-a1b8-4dd0-ae61-a7d56755e339/files/a20110c9-fa13-45fd-9824-63c0c760e22c.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Genshin Impact
            </h1>
            <p className="text-2xl md:text-3xl font-poppins font-semibold text-foreground/90">
              Гайд по прокачке персонажей
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 font-roboto max-w-2xl mx-auto">
            Всё необходимое для развития твоих героев: материалы, таланты, приоритеты
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-lg px-8 py-6 font-poppins shadow-lg shadow-primary/25"
            onClick={() => document.getElementById('characters')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Star" size={20} className="mr-2" />
            Выбрать персонажа
          </Button>
        </div>
      </div>

      <div id="characters" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-poppins font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Популярные персонажи
          </h2>
          <p className="text-muted-foreground font-roboto mb-8">
            Фильтруй по элементу и изучай гайды по прокачке
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {elements.map(element => (
              <Badge
                key={element}
                className={`cursor-pointer px-4 py-2 text-sm font-poppins transition-all ${
                  selectedElement === element
                    ? (element === 'Все' ? 'bg-primary' : elementColors[element])
                    : 'bg-muted hover:bg-muted/80'
                }`}
                onClick={() => setSelectedElement(element)}
              >
                {element}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredCharacters.map((character, index) => (
            <Card 
              key={character.id}
              className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-border/50 bg-card/80 backdrop-blur overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${character.color} opacity-20`}></div>
                <img 
                  src={character.image} 
                  alt={character.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${character.color}`}></div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <CardTitle className="text-2xl font-poppins group-hover:text-primary transition-colors">
                      {character.name}
                    </CardTitle>
                    <CardDescription className="font-roboto text-sm mt-1">
                      {character.role}
                    </CardDescription>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(character.rarity)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                </div>

                <Badge className={`w-fit bg-gradient-to-r ${character.color} text-white border-0`}>
                  {character.element}
                </Badge>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground font-roboto mb-1">Материалы босса:</p>
                    <p className="text-sm font-roboto">{character.materials.join(', ')}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-muted-foreground font-roboto mb-1">Приоритет талантов:</p>
                    <p className="text-sm font-roboto">{character.talents}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground font-roboto mb-2 flex items-center gap-1">
                      <Icon name="Users" size={14} />
                      Лучшие отряды:
                    </p>
                    <div className="space-y-2">
                      {character.teams.slice(0, 2).map((team, idx) => (
                        <div key={idx} className="text-xs bg-muted/30 rounded-md p-2">
                          <p className="font-semibold text-primary mb-1">{team.name}</p>
                          <p className="text-muted-foreground font-roboto">{team.members.join(' • ')}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className={`w-full mt-4 bg-gradient-to-r ${character.color} hover:opacity-90 font-poppins`}
                  >
                    <Icon name="BookOpen" size={16} className="mr-2" />
                    Полный гайд
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div 
        className="relative py-20 mt-16 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 20, 40, 0.92), rgba(30, 20, 40, 0.95)), url('https://cdn.poehali.dev/projects/a03e1018-a1b8-4dd0-ae61-a7d56755e339/files/eaf63d95-ac3d-4a36-ade6-3c4268353d03.jpg')`
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Таблица прокачки уровней
          </h2>

          <Tabs defaultValue="levels" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="levels" className="font-poppins">Уровни персонажа</TabsTrigger>
              <TabsTrigger value="talents" className="font-poppins">Таланты</TabsTrigger>
            </TabsList>

            <TabsContent value="levels" className="space-y-4">
              <div className="overflow-x-auto">
                <div className="grid gap-3">
                  {levelingGuide.map((level, idx) => (
                    <Card key={idx} className="bg-card/60 backdrop-blur border-border/50">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-poppins">
                            Уровень {level.level}
                          </CardTitle>
                          <Badge className="bg-accent text-accent-foreground font-roboto">
                            {level.mora} Мора
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm font-roboto">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Опыт:</span>
                          <span className="text-secondary font-medium">{level.exp}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Материалы:</span>
                          <span className="text-right max-w-[60%]">{level.materials}</span>
                        </div>
                        {level.boss !== '—' && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Боссы:</span>
                            <span className="text-right max-w-[60%]">{level.boss}</span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="talents" className="space-y-4">
              <Card className="bg-card/60 backdrop-blur border-border/50">
                <CardHeader>
                  <CardTitle className="font-poppins">Прокачка талантов 1 → 10</CardTitle>
                  <CardDescription className="font-roboto">
                    Общие затраты на максимальный уровень одного таланта
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 font-roboto">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Мора:</span>
                    <span className="text-accent font-semibold">1,652,500</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Книги талантов (все уровни):</span>
                    <span>9 золотых, 63 фиолетовых, 114 синих</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Материалы врагов:</span>
                    <span>18 / 66 / 93 (по редкости)</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="text-muted-foreground">Материалы босса:</span>
                    <span className="text-primary font-semibold">3 Короны Прозрения</span>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      💡 Совет: Сначала прокачай главный талант до уровня 8-9, остальные можно оставить на 6-7
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Sparkles" size={48} className="mx-auto mb-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Быстрая прокачка персонажей
          </h2>
          <p className="text-lg text-muted-foreground mb-8 font-roboto">
            Используй интерактивную карту Тейвата, чтобы найти все ресурсы для прокачки твоих героев
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 font-poppins">
              <Icon name="Map" size={20} className="mr-2" />
              Карта ресурсов
            </Button>
            <Button size="lg" variant="outline" className="font-poppins border-secondary text-secondary hover:bg-secondary/10">
              <Icon name="Calendar" size={20} className="mr-2" />
              Расписание боссов
            </Button>
          </div>
        </div>
      </div>

      <footer className="border-t border-border/50 py-8 mt-16 bg-card/20 backdrop-blur">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground font-roboto">
            © 2024 Genshin Impact Helper. Прокачивай героев эффективно! ⚡
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;