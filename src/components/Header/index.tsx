'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const nav = [
  { href: '#sobre', label: 'Sobre a Rocketseat' },
  { href: '#ecossistema', label: 'Ecossistema' },
  { href: '#conteudos', label: 'Conteúdos' },
  { href: '#diagnostico', label: 'Diagnóstico de IA' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#planos', label: 'Ver planos' },
  { href: '#duvidas', label: 'Dúvidas' },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/60 bg-zinc-950/90 text-white backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          className="flex select-none items-center gap-3"
          href="#inicio"
          aria-label="Rocketseat para empresas"
        >
          <Image
            width={200}
            height={40}
            src="/logo-rocket.svg"
            alt="Rocketseat Logo"
            className="h-8 w-auto"
          />
          <span className="hidden border-l border-zinc-800 pl-3 text-xs font-bold uppercase tracking-wider text-zinc-500 sm:inline">
            Para Empresas
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm text-zinc-400 lg:flex">
          {nav.map(({ href, label }) => (
            <Link
              className="rounded-md px-3 py-2 transition hover:bg-zinc-900 hover:text-white"
              href={href}
              key={label}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 text-sm font-medium lg:flex">
          <a
            className="text-zinc-400 transition hover:text-white"
            href="#cadastro"
          >
            Entrar
          </a>
          <a
            className="rounded bg-emerald-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-emerald-700"
            href="#cadastro"
          >
            Demonstração
          </a>
        </div>

        <button
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-zinc-800 text-white transition hover:border-emerald-500 lg:hidden"
          type="button"
          onClick={() => setIsOpen((state) => !state)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-zinc-850 border-t bg-zinc-950 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map(({ href, label }) => (
              <Link
                className="rounded-md px-3 py-3 text-sm text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
                href={href}
                key={label}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <hr className="my-3 border-zinc-800" />
            <div className="flex flex-col gap-3 px-3">
              <a
                className="py-2 text-center text-sm font-medium text-zinc-400 hover:text-white"
                href="#cadastro"
                onClick={() => setIsOpen(false)}
              >
                Entrar
              </a>
              <a
                className="rounded bg-emerald-600 px-4 py-3 text-center text-sm font-bold uppercase tracking-wider text-white"
                href="#cadastro"
                onClick={() => setIsOpen(false)}
              >
                Demonstração
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
