import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <>
      {/* Header */}
      <div class="max-w-[1100px] mx-auto px-5">
        <header class="flex justify-between items-center py-6">
          <div>
            <img
              src="https://pub-05940314903b40afadddd07dd49bbeb6.r2.dev/parallel-dev/logo.png"
              alt="ParallelDev Logo"
              class="h-[42px]"
            />
          </div>
          <nav class="flex items-center">
            <a
              href="https://github.com/optivise-lab/parallel-dev"
              target="_blank"
              class="ml-5 no-underline text-slate-400 font-medium transition-colors duration-300 hover:text-teal-400 flex items-center gap-1.5"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a
              href="https://x.com/ALEMRANCU"
              target="_blank"
              class="ml-5 no-underline text-slate-400 font-medium transition-colors duration-300 hover:text-teal-400"
            >
              Twitter
            </a>
          </nav>
        </header>
      </div>

      {/* Hero */}
      <section class="text-center py-36 px-5">
        <div class="max-w-[1100px] mx-auto">
          {/* Open Source Badge */}
          <div class="flex justify-center mb-6">
            <a
              href="https://github.com/optivise-lab/parallel-dev"
              target="_blank"
              class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1f2a44] bg-slate-800/50 text-sm text-slate-300 no-underline hover:border-teal-400 transition-colors duration-300"
            >
              <svg class="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              Open Source &amp; Free Forever
            </a>
          </div>

          <h1 class="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-violet-500 bg-clip-text text-transparent">
            Run Multiple AI Coding Agents in Parallel — Natively.
          </h1>
          <p class="text-xl text-slate-400 max-w-[700px] mx-auto mb-10">
            Isolated branches. Real terminals. Any CLI AI agent. Zero vendor lock-in.
          </p>
          <div class="flex gap-4 justify-center items-center flex-wrap">
            <a
              href="https://pub-05940314903b40afadddd07dd49bbeb6.r2.dev/parallel-dev/parallel-dev.dmg"
              class="inline-block px-8 py-3.5 rounded-lg bg-gradient-to-r from-teal-400 to-violet-500 text-white font-semibold transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
            >
              Download for Mac
            </a>
            <a
              href="https://github.com/optivise-lab/parallel-dev"
              target="_blank"
              class="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-[#1f2a44] bg-slate-800 text-slate-200 font-semibold transition-all duration-300 hover:border-teal-400 hover:-translate-y-0.5 no-underline"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section class="py-24">
        <div class="max-w-[1100px] mx-auto px-5">
          <h2 class="text-center text-3xl font-bold mb-16 bg-gradient-to-r from-teal-400 to-violet-500 bg-clip-text text-transparent">
            Built for AI-Native Developers
          </h2>

          <div class="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8">
            {[
              { title: 'Parallel Sessions', desc: 'Run multiple agents simultaneously without context collision.' },
              { title: 'Branch Isolation', desc: 'Each AI session runs on its own Git branch and workspace.' },
              { title: 'Native Terminal', desc: 'Claude, Codex, Amp — run exactly as designed.' },
              { title: 'Agent Agnostic', desc: 'Works with any CLI-based AI coding agent.' },
              { title: 'Open Source', desc: 'Fully open source. Inspect, modify, and contribute to the codebase.' },
              { title: 'Developer First', desc: 'No wrappers. No abstractions. No vendor lock-in. Full control.' },
            ].map((feature) => (
              <div class="bg-slate-800 p-8 rounded-xl border border-[#1f2a44] transition-all duration-300 hover:border-teal-400 hover:-translate-y-1.5">
                <h3 class="mb-3.5 bg-gradient-to-r from-teal-400 to-violet-500 bg-clip-text text-transparent font-bold text-lg">
                  {feature.title}
                </h3>
                <p class="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section class="py-24 bg-gradient-to-b from-[#0F172A] to-[#111c33]">
        <div class="max-w-[1100px] mx-auto px-5">
          <h2 class="text-center text-3xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-violet-500 bg-clip-text text-transparent">
            Installation Guide
          </h2>

          {/* Tabs */}
          <div class="flex justify-center gap-4 mb-12">
            <button data-tab="macos" class="tab-btn active px-6 py-2.5 rounded-lg bg-gradient-to-r from-teal-400 to-violet-500 text-white font-semibold text-sm cursor-pointer border-none">
              macOS
            </button>
            <button data-tab="windows" class="tab-btn px-6 py-2.5 rounded-lg bg-slate-800 text-slate-500 font-semibold text-sm cursor-not-allowed border-none relative">
              Windows
              <span class="absolute -right-2 -top-2 text-violet-500 text-[10px] font-bold uppercase tracking-wide">
                Soon
              </span>
            </button>
            <button data-tab="github" class="tab-btn px-6 py-2.5 rounded-lg bg-slate-800 text-slate-400 font-semibold text-sm cursor-pointer border-none hover:text-white transition-colors duration-300">
              GitHub
            </button>
          </div>

          {/* macOS Steps */}
          <div id="tab-macos" class="tab-content max-w-[700px] mx-auto space-y-8">
            <div class="flex gap-5">
              <div class="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-r from-teal-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <div>
                <h3 class="text-lg font-semibold text-slate-200 mb-1">Download the installer</h3>
                <p class="text-slate-400">Click the "Download for Mac" button above to get the <code class="bg-slate-800 px-1.5 py-0.5 rounded text-teal-400 text-sm">.dmg</code> file.</p>
              </div>
            </div>

            <div class="flex gap-5">
              <div class="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-r from-teal-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <div>
                <h3 class="text-lg font-semibold text-slate-200 mb-1">Open the installer</h3>
                <p class="text-slate-400">Double-click the downloaded <code class="bg-slate-800 px-1.5 py-0.5 rounded text-teal-400 text-sm">.dmg</code> file to mount it.</p>
              </div>
            </div>

            <div class="flex gap-5">
              <div class="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-r from-teal-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <div>
                <h3 class="text-lg font-semibold text-slate-200 mb-1">Install ParallelDev</h3>
                <p class="text-slate-400">Drag the ParallelDev app to your Applications folder.</p>
              </div>
            </div>

            <div class="flex gap-5">
              <div class="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-r from-teal-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                4
              </div>
              <div>
                <h3 class="text-lg font-semibold text-slate-200 mb-1">Remove quarantine attribute (if needed)</h3>
                <p class="text-slate-400 mb-3">If macOS blocks the app, run this command in Terminal:</p>
                <pre class="bg-slate-900 border border-[#1f2a44] rounded-lg px-4 py-3 overflow-x-auto text-sm text-teal-400 font-mono">xattr -d com.apple.quarantine /Applications/parallel-dev.app</pre>
              </div>
            </div>

            <div class="flex gap-5">
              <div class="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-r from-teal-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                5
              </div>
              <div>
                <h3 class="text-lg font-semibold text-slate-200 mb-1">Launch the app</h3>
                <p class="text-slate-400">Open ParallelDev from your Applications folder or Spotlight.</p>
              </div>
            </div>
          </div>

          {/* Windows Steps */}
          <div id="tab-windows" class="tab-content max-w-[700px] mx-auto hidden">
            <div class="text-center py-12">
              <p class="text-slate-400 text-lg">Windows support is coming soon.</p>
            </div>
          </div>

          {/* GitHub Build Steps */}
          <div id="tab-github" class="tab-content max-w-[700px] mx-auto space-y-8 hidden">
            <p class="text-slate-400 text-center mb-4">
              ParallelDev is open source. Clone the repo, customize it, and build your own version.
            </p>

            <div class="flex gap-5">
              <div class="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-r from-teal-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <div>
                <h3 class="text-lg font-semibold text-slate-200 mb-1">Clone the repository</h3>
                <pre class="bg-slate-900 border border-[#1f2a44] rounded-lg px-4 py-3 overflow-x-auto text-sm text-teal-400 font-mono">git clone https://github.com/optivise-lab/parallel-dev.git{'\n'}cd parallel-dev</pre>
              </div>
            </div>

            <div class="flex gap-5">
              <div class="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-r from-teal-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <div>
                <h3 class="text-lg font-semibold text-slate-200 mb-1">Install dependencies</h3>
                <pre class="bg-slate-900 border border-[#1f2a44] rounded-lg px-4 py-3 overflow-x-auto text-sm text-teal-400 font-mono">npm install</pre>
              </div>
            </div>

            <div class="flex gap-5">
              <div class="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-r from-teal-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
              <div>
                <h3 class="text-lg font-semibold text-slate-200 mb-1">Build the app</h3>
                <pre class="bg-slate-900 border border-[#1f2a44] rounded-lg px-4 py-3 overflow-x-auto text-sm text-teal-400 font-mono">npm run build</pre>
              </div>
            </div>

            <div class="flex gap-5">
              <div class="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-r from-teal-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                4
              </div>
              <div>
                <h3 class="text-lg font-semibold text-slate-200 mb-1">Customize &amp; contribute</h3>
                <p class="text-slate-400">
                  Make your changes, then open a pull request on{' '}
                  <a href="https://github.com/optivise-lab/parallel-dev" target="_blank" class="text-teal-400 no-underline hover:underline">GitHub</a>.
                </p>
              </div>
            </div>
          </div>

          {/* Tab switching script */}
          <script dangerouslySetInnerHTML={{
            __html: `
              document.querySelectorAll('.tab-btn').forEach(function(btn) {
                btn.addEventListener('click', function() {
                  var tab = this.getAttribute('data-tab');
                  if (tab === 'windows') return;
                  document.querySelectorAll('.tab-btn').forEach(function(b) {
                    b.classList.remove('active');
                    b.className = b.className.replace(/bg-gradient-to-r from-teal-400 to-violet-500 text-white/g, 'bg-slate-800 text-slate-400');
                  });
                  this.classList.add('active');
                  this.className = this.className.replace(/bg-slate-800 text-slate-400/g, 'bg-gradient-to-r from-teal-400 to-violet-500 text-white');
                  document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.add('hidden'); });
                  document.getElementById('tab-' + tab).classList.remove('hidden');
                });
              });
            `
          }} />
        </div>
      </section>

      {/* Screenshot Showcase */}
      <section class="py-24">
        <div class="max-w-[1100px] mx-auto px-5">
          <h2 class="text-center text-3xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-violet-500 bg-clip-text text-transparent">
            See It in Action
          </h2>
          <p class="text-center text-slate-400 mb-12">
            A glimpse of ParallelDev running multiple AI agents side by side.
          </p>
          <div class="rounded-xl overflow-hidden border border-[#1f2a44]">
            <img
              src="/screenshoot-001.png"
              alt="ParallelDev Screenshot"
              class="w-full h-auto block"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="text-center p-10 text-slate-500 text-sm border-t border-[#1f2a44]">
        &copy; 2026 ParallelDev — Open Source by{' '}
        <a href="https://github.com/optivise-lab" target="_blank" class="text-teal-400 no-underline hover:underline">
          Optiviselab
        </a>{' '}|{' '}
        <a href="https://github.com/optivise-lab/parallel-dev" target="_blank" class="text-teal-400 no-underline hover:underline">
          GitHub
        </a>{' '}|{' '}
        <a href="https://x.com/ALEMRANCU" target="_blank" class="text-teal-400 no-underline hover:underline">
          Twitter
        </a>
      </footer>
    </>
  )
})

export default app
