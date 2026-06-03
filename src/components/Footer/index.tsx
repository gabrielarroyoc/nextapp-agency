import Link from 'next/link'
import Image from 'next/image'

const links = [
  { href: '#sobre', label: 'Sobre a Rocketseat' },
  { href: '#ecossistema', label: 'Ecossistema' },
  { href: '#conteudos', label: 'Conteúdos' },
  { href: '#diagnostico', label: 'Diagnóstico de IA' },
  { href: '#plataforma', label: 'Plataforma' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#planos', label: 'Ver planos' },
  { href: '#duvidas', label: 'Dúvidas' },
]

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="space-y-4">
          <Link className="flex select-none items-center gap-3" href="#inicio">
            <Image
              width={200}
              height={40}
              src="/logo-rocket.svg"
              alt="Rocketseat Logo"
              className="h-7 w-auto"
            />
            <span className="border-zinc-850 border-l pl-3 text-xs font-bold uppercase tracking-wider text-zinc-500">
              Para Empresas
            </span>
          </Link>
          <p className="max-w-md text-sm text-zinc-400">
            Plataforma para empresas que querem capacitar, acompanhar e evoluir
            seus times de tecnologia.
          </p>
        </div>

        <nav className="flex flex-wrap gap-2 text-sm text-zinc-400">
          {links.map((link) => (
            <Link
              className="rounded-md px-3 py-2 transition hover:bg-zinc-900 hover:text-white"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-zinc-900/60 bg-zinc-950 py-6 text-center text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} Rocketseat. Todos os direitos
        reservados.
      </div>
    </footer>
  )
}
