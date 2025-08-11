import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <main className="w-full max-w-2xl">
          <div className="backdrop-blur-xl bg-slate-800/30 border border-slate-700/50 rounded-3xl shadow-2xl p-10 transition-all duration-300 hover:shadow-purple-500/10 hover:shadow-3xl">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-slate-600/30">
                <Image
                  className="filter brightness-0 invert"
                  src="/next.svg"
                  alt="Next.js logo"
                  width={140}
                  height={35}
                  priority
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 text-center leading-tight tracking-tight">
              Practicing CI/CD
              <span className="inline-block ml-3 text-4xl animate-bounce">🚀</span>
            </h1>

            <div className="mb-10 text-center">
              <p className="text-xl text-slate-300 leading-relaxed mb-4">
                This homepage showcases my journey into{" "}
                <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Continuous Integration
                </span>{" "}
                and{" "}
                <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Continuous Deployment
                </span>
              </p>
              <div className="flex items-center justify-center gap-2 text-slate-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Every push triggers automated integration checks.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-2xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25"
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="24" height="24" fill="currentColor" className="transition-transform group-hover:rotate-12">
                  <path d="M10 .3a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 10 5.8c.85.004 1.71.12 2.51.35 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 10 .3" />
                </svg>
                <span>View GitHub Repo</span>
                <svg width="16" height="16" fill="currentColor" className="transition-transform group-hover:translate-x-1">
                  <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06z" />
                </svg>
              </a>

              <a
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border-2 border-slate-600 text-slate-300 font-semibold hover:bg-slate-700/30 hover:border-slate-500 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/vercel.svg"
                  alt="Vercel"
                  width={24}
                  height={24}
                  className="filter brightness-0 invert transition-transform group-hover:scale-110"
                />
                <span>Deployed on Vercel</span>
                <svg width="16" height="16" fill="currentColor" className="transition-transform group-hover:translate-x-1">
                  <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06z" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-slate-700/30 border border-slate-600/30 backdrop-blur-sm text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="text-sm font-semibold text-slate-300 mb-1">Fast Deployment</h3>
                <p className="text-xs text-slate-400">Automated builds</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-700/30 border border-slate-600/30 backdrop-blur-sm text-center">
                <div className="text-2xl mb-2">🔧</div>
                <h3 className="text-sm font-semibold text-slate-300 mb-1">Modern Stack</h3>
                <p className="text-xs text-slate-400">Next.js & Tailwind</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-700/30 border border-slate-600/30 backdrop-blur-sm text-center">
                <div className="text-2xl mb-2">📱</div>
                <h3 className="text-sm font-semibold text-slate-300 mb-1">Responsive</h3>
                <p className="text-xs text-slate-400">Mobile-first design</p>
              </div>
            </div>
          </div>
        </main>

        <footer className="mt-12 text-center max-w-2xl">
          <div className="p-6 rounded-2xl bg-slate-800/20 backdrop-blur-sm border border-slate-700/30">
            <p className="text-slate-400 mb-2">
              Crafted with{" "}
              <span className="text-pink-400 animate-pulse text-lg">♥</span>{" "}
              using{" "}
              <span className="font-semibold text-slate-300">Next.js</span>{" "}
              &{" "}
              <span className="font-semibold text-slate-300">Tailwind CSS</span>
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
              <span>© {new Date().getFullYear()} My CI/CD Practice</span>
              <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
              <span>Built for learning</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}