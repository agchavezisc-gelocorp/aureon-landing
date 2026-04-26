const services = [
  {
    title: "Bots inteligentes",
    text: "Atención automática, respuestas instantáneas y captura de leads 24/7 en múltiples canales.",
    icon: "🤖",
  },
  {
    title: "Tiendas online",
    text: "Tiendas modernas, seguras y optimizadas para vender más, con catálogo, pagos e inventario.",
    icon: "🛒",
  },
  {
    title: "Automatizaciones",
    text: "Automatizamos procesos repetitivos, integraciones, reportes, notificaciones y flujos de trabajo.",
    icon: "⚙️",
  },
  {
    title: "Soluciones con IA",
    text: "Implementamos inteligencia artificial para análisis, búsqueda inteligente, asistentes y automatización.",
    icon: "🧠",
  },
];

const techs = ["Next.js", "Python", "FastAPI", "PostgreSQL", "Docker", "Ollama", "Qdrant"];

const process = [
  ["🔍", "1. Análisis", "Entendemos tu negocio, objetivos, procesos y oportunidades de automatización."],
  ["🧩", "2. Diseño", "Definimos la solución, arquitectura, experiencia de usuario y alcance del proyecto."],
  ["⚙️", "3. Desarrollo", "Construimos herramientas modernas, escalables y alineadas a tus necesidades."],
  ["🚀", "4. Implementación", "Lanzamos, medimos resultados y optimizamos continuamente."],
];

const projects = [
  {
    title: "Bot de atención al cliente",
    text: "Asistente automatizado para responder preguntas frecuentes y capturar clientes potenciales.",
    tag: "Bots",
  },
  {
    title: "Tienda online inteligente",
    text: "E-commerce moderno con catálogo, inventario, pagos y experiencia optimizada.",
    tag: "E-commerce",
  },
  {
    title: "Automatización de reportes",
    text: "Flujos automáticos para reducir tareas manuales y acelerar decisiones.",
    tag: "Automatización",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07111f] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[35%] h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-black/25 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600 text-xl font-black shadow-lg shadow-blue-600/30">
              A
            </div>
            <span className="text-2xl font-black tracking-[0.35em]">AUREON</span>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a className="text-white" href="#">Inicio</a>
            <a className="transition hover:text-cyan-300" href="#servicios">Servicios</a>
            <a className="transition hover:text-cyan-300" href="#proceso">Cómo trabajamos</a>
            <a className="transition hover:text-cyan-300" href="#proyectos">Proyectos</a>
            <a className="transition hover:text-cyan-300" href="#contacto">Contacto</a>
          </div>

          <a
            href="#contacto"
            className="hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-sm font-bold shadow-lg shadow-blue-600/25 transition hover:scale-105 md:block"
          >
            Solicitar información
          </a>
        </nav>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-20">
        <div>
          <div className="mb-8 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/5 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
            Automatización • Inteligencia Artificial • Desarrollo
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-tight md:text-7xl">
            Soluciones inteligentes para impulsar{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              tu negocio
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Desarrollamos bots, tiendas online, automatizaciones y herramientas con inteligencia artificial
            para optimizar procesos, ahorrar tiempo y mejorar la experiencia de tus clientes.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#servicios"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-4 text-center font-bold shadow-lg shadow-blue-600/25 transition hover:scale-105"
            >
              Ver nuestros servicios
            </a>
            <a
              href="#contacto"
              className="rounded-xl border border-cyan-400/60 bg-white/5 px-7 py-4 text-center font-bold transition hover:bg-cyan-400/10"
            >
              Contáctame por WhatsApp
            </a>
          </div>

          <div className="mt-9 grid gap-3 text-sm text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
            {["Soluciones a medida", "Tecnología moderna", "Soporte continuo", "Seguridad"].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                <span className="mr-2 text-cyan-400">✓</span>{item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-black/40 p-4 shadow-2xl shadow-blue-950/40 backdrop-blur">
            <div className="rounded-[1.5rem] border border-white/10 bg-[#081421] p-6">
              <div className="mb-7 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/40 bg-gradient-to-br from-blue-900/80 to-purple-900/80 text-3xl shadow-lg shadow-blue-950/40">
                    🤖
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Dashboard</p>
                    <h3 className="text-2xl font-black">Hola, Aureon 👋</h3>
                  </div>
                </div>

                <div className="flex shrink-0 gap-2">
                  <span className="h-3 w-3 rounded-full bg-cyan-400" />
                  <span className="h-3 w-3 rounded-full bg-purple-400" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Ventas", "$24,780", "+12.5%"],
                  ["Nuevos clientes", "156", "+8.2%"],
                  ["Automatizaciones", "28", "+15.7%"],
                ].map(([label, value, growth]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs text-slate-400">{label}</p>
                    <p className="mt-2 text-2xl font-black">{value}</p>
                    <p className="text-xs font-bold text-emerald-400">{growth}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-[1.5fr_1fr]">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="mb-4 text-sm font-semibold text-slate-300">Actividad reciente</p>
                  <div className="flex h-36 items-end gap-3">
                    {[35, 58, 42, 75, 52, 82, 65, 96].map((h, i) => (
                      <div
                        key={i}
                        className="w-full rounded-t-lg bg-gradient-to-t from-blue-700 via-blue-500 to-cyan-300"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="mb-5 text-sm font-semibold text-slate-300">Canales</p>
                  <div className="mx-auto h-28 w-28 rounded-full bg-[conic-gradient(from_180deg,#2563EB_0_45%,#7C3AED_45%_75%,#06B6D4_75%_100%)] p-5">
                    <div className="h-full w-full rounded-full bg-[#081421]" />
                  </div>
                  <div className="mt-5 space-y-2 text-xs text-slate-300">
                    <p>● WhatsApp 45%</p>
                    <p>● Web 30%</p>
                    <p>● Instagram 15%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {["🛒", "⚙️", "🧠"].map((icon, i) => (
            <div
              key={icon}
              className={`absolute hidden h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/30 bg-white/5 text-3xl shadow-lg backdrop-blur lg:flex ${
                i === 0 ? "-left-16 bottom-28" : i === 1 ? "-right-10 bottom-20" : "-right-12 top-20"
              }`}
            >
              {icon}
            </div>
          ))}
        </div>
      </section>

      <section id="servicios" className="relative z-10 border-t border-white/10 px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-500">Nuestros servicios</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Soluciones que transforman tu negocio</h2>
          <p className="mt-4 text-lg text-slate-400">
            Combinamos tecnología e inteligencia para crear herramientas que trabajan por ti.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 text-left transition hover:scale-[1.03] hover:border-blue-500/60 hover:bg-white/[0.07]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-900 to-purple-800 text-3xl shadow-lg shadow-blue-950/30">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{service.text}</p>
                <p className="mt-7 font-bold text-blue-400 transition group-hover:text-cyan-300">Saber más →</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-7 rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-6 text-slate-300">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">
              Tecnologías con las que trabajamos
            </span>
            {techs.map((tech) => (
              <span key={tech} className="font-black">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="relative z-10 border-t border-white/10 bg-gradient-to-b from-transparent to-slate-900/50 px-6 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-400">Proceso</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Cómo trabajamos</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-400">
            Nuestro proceso está diseñado para llevar tu idea a producción de forma rápida y eficiente.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 transition hover:scale-[1.03] hover:bg-white/[0.08]"
              >
                <div className="mb-4 text-4xl">{icon}</div>
                <h3 className="mb-3 text-xl font-black">{title}</h3>
                <p className="leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="relative z-10 border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-purple-400">Casos de uso</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Proyectos y soluciones</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 transition hover:scale-[1.03] hover:border-purple-500/60">
                <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-bold text-purple-300">
                  {project.tag}
                </span>
                <h3 className="mt-6 text-2xl font-black">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{project.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-500/10 p-10 text-center shadow-2xl shadow-blue-950/30">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">Contacto</p>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">¿Listo para automatizar tu negocio?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Cuéntame tu idea y te ayudo a convertirla en una solución digital moderna, automatizada e inteligente.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="mailto:contacto@aureon.mx" className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-black shadow-lg shadow-blue-600/20 transition hover:scale-105">
              Solicitar información
            </a>
            <a href="https://wa.me/5210000000000" target="_blank" className="rounded-xl border border-cyan-400/70 bg-black/20 px-8 py-4 font-black transition hover:bg-cyan-400/10">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Aureon. Soluciones inteligentes, automatización e inteligencia artificial.
      </footer>
    </main>
  );
}
