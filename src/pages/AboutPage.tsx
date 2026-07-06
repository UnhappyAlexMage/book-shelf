import { useEffect } from 'react';
import { Link, useLocation } from 'react-router';

export default function AboutPage() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [hash]);

    return (
        <main className="flex-1 overflow-y-auto bg-white transition-all duration-300 h-[calc(100vh-4.5rem)]">
            <section className="flex border-l border-slate-200 pt-10">
                <div className="flex flex-col w-full h-full justify-between items-start pt-10 pl-10 pr-10 pb-2.5 bg-slate-50">
                    <h3  className="text-8xl font-bold mb-6">Далее представлена краткая информаци о выполненном проекте:</h3>
                    <nav className="flex gap-4 p-4 bg-slate-100 rounded-lg w-full mb-4">
                        <Link to="#mission" className="text-blue-600 hover:underline font-medium">
                            🎯 Наша миссия
                        </Link>
                        <Link to="#team" className="text-blue-600 hover:underline font-medium">
                            👥 Наша команда
                        </Link>
                    </nav>
                    <p className="text-slate-600 w-full">
                        Добро пожаловать на страницу "Информация о проекте"! 
                        Ниже вы можете ознакомиться с некоторым кратко описанным функционалом проекта
                        Используйте ссылки выше для быстрой навигации.
                    </p>
                </div>
            </section>
            
            <section id="mission" className="p-10 border-t border-slate-200 min-h-[80vh] bg-slate-50">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">🎯 Наша миссия</h2>
                <div className="text-slate-600 space-y-4 max-w-3xl">
                    <p>
                        Мы стремимся создать идеальную экосистему для разработчиков, объединяя современные 
                        технологии и интуитивно понятный дизайн. Наша главная цель — автоматизировать рутинные 
                        процессы, чтобы вы могли сфокусироваться на создании действительно важных вещей.
                    </p>
                    <p>
                        Каждый день мы анализируем отзывы пользователей, оптимизируем производительность 
                        и добавляем новые функции. Мы верим, что открытый код и сильное сообщество способны 
                        изменить подход к веб-разработке во всем мире.
                    </p>
                </div>
            </section>

            {/* ЯКОРЬ 2: Наша команда */}
            <section id="team" className="p-10 border-t border-slate-200 min-h-[80vh]">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">👥 Наша команда</h2>
                <div className="text-slate-600 space-y-4 max-w-3xl">
                    <p>
                        За каждым успешным решением стоит команда профессионалов, увлеченных своим делом. 
                        В нашей студии работают инженеры, дизайнеры и продуктовые аналитики с опытом работы 
                        в крупнейших IT-компаниях мира.
                    </p>
                    <p>
                        Мы не просто пишем код — мы создаем пользовательский опыт. Каждый интерфейс проходит 
                        строгое тестирование, а архитектурные решения обсуждаются всей командой, чтобы 
                        гарантировать масштабируемость и безопасность вашего приложения в будущем.
                    </p>
                </div>
            </section>
        </main>
    );
}
