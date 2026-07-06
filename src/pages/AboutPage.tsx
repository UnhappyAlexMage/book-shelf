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
            <section className="flex border-l border-slate-200">
                <div className="flex flex-col w-full h-full justify-between items-start pt-10 pl-10 pr-10 pb-2.5 ">
                    <h3 className="text-9xl font-bold mb-6">Далее представлена краткая информаци о выполненном проекте:</h3>
                    <nav className="flex gap-4 p-4 bg-slate-100 rounded-lg w-full mb-4">
                        <Link to="#technologystack" className="text-blue-600 hover:underline font-medium">
                            1.Используемый стэк технологий
                        </Link>
                        <Link to="#maintasks" className="text-blue-600 hover:underline font-medium">
                            2.Основные задачи проекта
                        </Link>
                        <Link to="#solvedproblems" className="text-blue-600 hover:underline font-medium">
                            3.Решенные задачи в проекте
                        </Link>
                    </nav>
                    <p className="text-black w-full">
                        Добро пожаловать на страницу «Информация о проекте»! 
                        Ниже вы можете ознакомиться с некоторым кратко описанным функционалом проекта.
                        Используйте ссылки выше ↑ для быстрой навигации.
                    </p>
                </div>
            </section>
            <section id="technologystack" className="p-10 border-t w-full border-slate-200 min-h-[50vh] bg-slate-200">
                <h4 className="text-l font-bold mb-4 text-slate-800">Технологический стэк для разработки проекта</h4>
                <div className="text-black space-y-4 ">
                    <p className='text-slate-600 w-full'>
                        Для данного проекта использовался следующий технологический стэк, взятый из требовий к реализации проекта:
                    </p>
                    <ul className='space-y-2.5 pl-1 text-sm font-medium text-slate-600 list-disc list-inside'>
                        <li>TailwindCSS</li>
                        <li>Axios</li>
                        <li>React/Vite</li>
                        <li>React Router</li>
                        <li>Zustand</li>
                        <li>Yup + React Hook Form</li>
                        <li>React Icons</li>
                    </ul>
                    <p className='text-slate-600 w-full'>
                        В дальнейшей реализации проекта, будут использованы следующие технологии: добавление базы данных (PostgreSQL) - хранение и сохранение данных,
                        Node.js (Для разработки полноценной backend-части приложения),
                        библиотека react-hot-toast при успешных завершенных действия.
                    </p>
                </div>
            </section>
            <section id="maintasks" className="p-10 border-t border-slate-200 min-h-[50vh]">
                <h4 className="text-l font-bold mb-4 text-slate-800">Основные задачи проекта</h4>
                <div className="text-slate-600 space-y-4">
                    <p className='text-slate-600 w-full'>
                        Основные задачи при реализации проекта заключались в следующем: 
                    </p>
                    <ul className='space-y-2.5 pl-1 text-sm font-medium text-slate-600 list-disc list-inside'>
                        <li>Данные замоканы в файлах проекта</li>
                        <li>Отсутствие inline-стилей</li>
                        <li>Адаптивная верстка</li>
                        <li>Компоненты содержат все виды ссылок: "Минимум 2 якорные ссылки", "Минимум 2 страницы (включая главную страницу)", "По 1 ссылке на телефон, email и внешний ресурс"</li>
                        <li>Наполнение согласно тематики сайта, содержащие теги в тех. задании.</li>
                    </ul>
                    <p className='text-slate-600 w-full'>
                        Все задачи были выполнены в соответствии с техническими требованиями к проекту.
                    </p>
                </div>
            </section>
            <section id="solvedproblems" className="p-10 border-t border-slate-200 min-h-[50vh] bg-slate-200">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Решенные проблемы в течение работы</h2>
                <div className="text-slate-600 space-y-4">
                    <p>
                        В данном проекте были решены следующие проблемы:
                    </p>
                    <ul className='space-y-2.5 pl-1 text-sm font-medium text-slate-600 list-disc list-inside'>
                        <li>Продумывание логики проекта в соответствии с тех. требованиями</li>
                        <li>Разработка концепции, создание дизайна</li>
                        <li>Реализация проекта</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
