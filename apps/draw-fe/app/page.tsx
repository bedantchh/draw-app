import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-sky-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-sky-500 rounded-lg"></div>
            <h1 className="text-2xl font-bold text-gray-900">Draw App</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/signin"
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 hover:shadow-lg transition-all"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Draw, Collaborate,{" "}
            <span className="text-sky-500">
              Create Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            A powerful collaborative drawing tool that lets you sketch ideas,
            brainstorm with your team, and bring your creative vision to life in
            real-time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/signup"
              className="bg-sky-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-sky-600 hover:shadow-xl transition-all transform hover:scale-105"
            >
              Start Drawing Free
            </Link>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-sky-500 hover:text-sky-500 transition-all">
              Watch Demo
            </button>
          </div>

          {/* Feature Preview */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-20">
            <div className="aspect-video bg-sky-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-sky-500 rounded-2xl flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg">
                  Beautiful collaborative canvas
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Real-time Collaboration
            </h3>
            <p className="text-gray-600">
              Work together with your team in real-time. See changes instantly
              as they happen.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Powerful Drawing Tools
            </h3>
            <p className="text-gray-600">
              From simple sketches to detailed diagrams. All the tools you need
              to express your ideas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Built-in Chat
            </h3>
            <p className="text-gray-600">
              Discuss ideas while you draw. Integrated chat keeps your team
              connected.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 mt-20 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p>&copy; 2025 Draw App. Built for creative collaboration.</p>
        </div>
      </footer>
    </div>
  );
}
