import "./style.css";

document.querySelector("#app").innerHTML = `
  <main class="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
    <section class="max-w-2xl text-center px-6 bg-zinc-800/50 backdrop-blur">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight">
        Build faster with Tailwind
      </h1>

      <p class="mt-4 text-zinc-300 leading-relaxed">
        Utility-first styling that keeps you in flow and close to your design.
      </p>

      <div class="mt-8 flex justify-center gap-4">
        <button
          class="px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-400 transition font-medium"
        >
          Get Started
        </button>

        <button
          class="px-6 py-3 rounded-lg border border-zinc-600 hover:border-zinc-400 hover:scale-105 transition"
        >
          Learn More
        </button>
      </div>
    </section>
  </main>
`;

