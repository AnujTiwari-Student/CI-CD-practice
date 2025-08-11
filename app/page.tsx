import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8">
      <main className="flex flex-col items-center gap-8 bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-2xl px-10 py-12 max-w-lg w-full">
        <Image
          className="mb-4"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={30}
          priority
        />
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-2 text-center">
          Practicing CI/CD 🚀
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6">
          This homepage is a demo for my <span className="font-semibold text-blue-600 dark:text-blue-400">CI/CD</span> learning journey.<br />
          Every push triggers an automated deployment!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-purple-600 transition"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" fill="currentColor" className="inline-block"><path d="M10 .3a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 10 5.8c.85.004 1.71.12 2.51.35 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 10 .3"/></svg>
            GitHub Repo
          </a>
          <a
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-blue-400 text-blue-700 dark:text-blue-300 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel"
              width={20}
              height={20}
              className="dark:invert"
            />
            Deployed on Vercel
          </a>
        </div>
      </main>
      <footer className="mt-12 text-gray-500 dark:text-gray-400 text-sm text-center">
        Made with <span className="text-pink-500">♥</span> using Next.js & Tailwind CSS<br />
        <span className="text-xs">© {new Date().getFullYear()} My CI/CD Practice</span>
      </footer>
    </div>
  );
}