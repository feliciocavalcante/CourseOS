
import './App.css'

function App() {
  

  return (
    <>
     <div className="flex h-screen bg-gray-900 text-white">
      <aside className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">

            </div>
            <div>
              <h1 className="text-lg font-bold">CourseOS</h1>
              <p className="text-xs text-gray-400">Hackathon 2025</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
          <section>
            <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">Menu</h3>
            <ul className="space-y-1">
              <li className="bg-orange-500/20 text-orange-400 border-l-2 border-orange-500">
                <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm">
                  <span>📘</span>
                  <span>Introduction</span>
                </a>
              </li>
              <li className="text-gray-300 hover:bg-gray-700 hover:text-white">
                <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm">
                  <span>📘</span>
                  <span>Curriculum</span>
                </a>
              </li>
              <li className="text-gray-300 hover:bg-gray-700 hover:text-white">
                <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm">
                  <span>📅</span>
                  <span>Calendar</span>
                </a>
              </li>
              <li className="text-gray-300 hover:bg-gray-700 hover:text-white">
                <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm">
                  <span>🎯</span>
                  <span>Strategies</span>
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">Community</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                  <span>💬</span>
                  <span>Coaching</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                  <span>👥</span>
                  <span>Network</span>
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">Account</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                  <span>👤</span>
                  <span>Profile</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                  <span>🚪</span>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </section>
        </nav>

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

      <main className="flex-1 overflow-y-auto">
        <header className="relative h-64 bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 flex items-center justify-center">
          <div className="text-center z-10">
            <h1 className="text-5xl font-bold mb-4">CourseOS</h1>
            <p className="text-lg max-w-2xl mx-auto px-4">
              Plataforma de curso aberto desenvolvida no Hackathon.
            </p>
            <a href="/login">
              <button className="mt-8 bg-white text-black px-6 py-2 rounded-lg font-semibold cursor-pointer">Entrar</button>
            </a>
          </div>
          <span className="absolute inset-0 bg-black/20"></span>
        </header>

        <section className="p-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-700">
            <h2 className="text-2xl font-bold">Conteúdo</h2>
            <span className="text-sm text-gray-400">5 LESSONS</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between bg-gray-800 rounded-lg p-4 hover:bg-gray-700">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-orange-400">▶</div>
                <div>
                  <h3 className="text-lg font-semibold">Introdução ao Curso</h3>
                  <p className="text-sm text-gray-400">12:34</p>
                </div>
              </div>
              <a href="#">
                <button className="border border-white text-white px-4 py-1 rounded hover:bg-white hover:text-black text-sm">Start</button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  )
}

export default App
