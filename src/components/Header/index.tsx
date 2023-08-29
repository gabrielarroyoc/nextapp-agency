import Image from 'next/image'
import Link from 'next/link'
import { User } from 'lucide-react'

const nav = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/',
    label: 'Cursos e Programas',
  },
  {
    href: '/',
    label: 'Eventos',
  },
  {
    href: '/',
    label: 'Blog',
  },
  {
    href: '/',
    label: 'Sobre nós',
  },
  {
    href: '/',
    label: 'Para empresas',
  },
]

export const Header = () => {
  return (
    <header className="gray-500 mx-auto flex w-full items-center justify-between border-b border-gray-700 px-10 py-6">
      <Link href="/">
        <div className="ml-2.5 select-none text-4xl font-bold text-white">
          <Image width={200} height={40} src="logo-rocket.svg" alt="Logo" />{' '}
        </div>
      </Link>

      <div className="">
        <nav className="flex justify-between text-gray-200 ">
          {nav.map((item) => {
            const { href, label } = item

            return (
              <Link href={href} key={href}>
                <span
                  className={`text-linksNavHeader cursor-pointer rounded-md p-3 text-sm transition duration-300 ease-in-out hover:bg-gray-500`}
                >
                  {label}
                </span>
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="mr-2.5 flex items-center justify-between gap-6 text-sm">
        <a
          className="flex items-center gap-2 rounded-md px-6 py-3 hover:bg-gray-500"
          href="/"
        >
          <User className="stroke-rocket-500" size={20} />
          ENTRAR
        </a>
        <a
          className="rounded-md border border-rocket-500 px-6 py-3 hover:bg-rocket-500"
          href="/"
        >
          CRIAR CONTA
        </a>
      </div>
    </header>
  )
}
