import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="min-h-screen bg-zinc-900 text-white p-10">
    <h1 class="text-4xl font-bold">Tailwind is rendering ✅</h1>
    <p class="mt-4 text-zinc-300">If this is styled, you’re done.</p>
    <button class="mt-6 rounded-lg bg-indigo-500 px-6 py-3 hover:bg-indigo-400 transition">
      Button
    </button>
  </div>
`;

