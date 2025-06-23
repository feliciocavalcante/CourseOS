import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex h-screen bg-gray-900 text-white">
        {/* Sidebar */}
        <aside
          className={`fixed md:static top-0 left-0 h-full w-64 bg-gray-800 border-r border-gray-700 flex flex-col transition-transform duration-300 z-20 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
            }`}
        >
          <div className="p-6 border-b border-gray-700 flex justify-between items-center md:block">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center"></div>
              <div>
                <h1 className="text-lg font-bold">CourseOS</h1>
                <p className="text-xs text-gray-400">Hackathon 2025</p>
              </div>
            </div>
            {/* Botão Fechar no mobile */}
            <button onClick={toggleSidebar} className="md:hidden text-gray-400 text-xl">✖</button>
          </div>

          <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
            {/* Menu Sections */}
            {[
              {
                title: 'Menu',
                items: [
                  { icon: '📘', label: 'Introduction', active: true },
                  { icon: '📘', label: 'Curriculum' },
                  { icon: '📅', label: 'Calendar' },
                  { icon: '🎯', label: 'Strategies' },
                ],
              },
              {
                title: 'Community',
                items: [
                  { icon: '💬', label: 'Coaching' },
                  { icon: '👥', label: 'Network' },
                ],
              },
              {
                title: 'Account',
                items: [
                  { icon: '👤', label: 'Profile' },
                  { icon: '🚪', label: 'Logout' },
                ],
              },
            ].map((section, index) => (
              <section key={index}>
                <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">{section.title}</h3>
                <ul className="space-y-1">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className={`${item.active
                          ? 'bg-orange-500/20 text-orange-400 border-l-2 border-orange-500'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        }`}
                    >
                      <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm">
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </nav>

          {/* Search Box */}
          <div className="p-4 border-t border-gray-700">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 w-full h-10 bg-gray-700 border-gray-600 text-white rounded-md text-sm px-3 py-2 placeholder-gray-400"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
          </div>
        </aside>

        {/* Conteúdo principal */}
        <main className="flex-1 overflow-y-auto">
          {/* Header */}
          <header className="relative h-48 md:h-64 bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 flex items-center justify-center">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="absolute top-4 left-4 md:hidden bg-black/50 p-2 rounded text-white text-lg"
            >
              ☰
            </button>

            <div className="text-center z-10 px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4">CourseOS</h1>
              <p className="text-base md:text-lg max-w-2xl mx-auto">
                Plataforma de curso aberto desenvolvida no Hackathon.
              </p>
              <a href="/login">
                <button className="mt-4 md:mt-8 bg-white text-black px-4 md:px-6 py-2 rounded-lg font-semibold text-sm md:text-base">
                  Entrar
                </button>
              </a>
            </div>
            <span className="absolute inset-0 bg-black/20"></span>
          </header>

          {/* Conteúdo */}
          <section className="p-4 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8 pb-2 md:pb-4 border-b border-gray-700">
              <h2 className="text-xl md:text-2xl font-bold">Conteúdo</h2>
              <span className="text-sm text-gray-400 mt-1 md:mt-0">5 LESSONS</span>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-800 rounded-lg p-4 hover:bg-gray-700">
                <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                  <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-orange-400">
                    ▶
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold">Introdução ao Curso</h3>
                    <p className="text-sm text-gray-400">12:34</p>
                  </div>
                </div>
                <a href="#">
                  <button className="border border-white text-white px-4 py-1 rounded hover:bg-white hover:text-black text-xs md:text-sm">
                    Start
                  </button>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
