import Image from "next/image";
import Link from "next/link";

const nav = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/",
    label: "Cursos e Programas",
  },
  {
    href: "/",
    label: "Eventos",
  },
  {
    href: "/",
    label: "Blog",
  },
  {
    href: "/",
    label: "Sobre nós",
  },
  {
    href: "/",
    label: "Para empresas",
  },
];

export const Header = () => {
  return (
    <header className="max-w-screen-lg mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/">
        <div className="text-4xl font-bold text-white select-none"><Image width={200} height={40} src="logo-rocket.svg" alt="Logo" /> </div>
      </Link>

      <div className="">
        <nav className="flex justify-between">
          {nav.map((item) => {
            const { href, label } = item;

            return (
              <Link href={href} key={href}>
                <span className={`p-3 text-sm text-linksNavHeader transition duration-300 ease-in-out cursor-pointer`}>{label}</span>
              </Link>
            );
          })}
        </nav>

      </div>

      <div className="flex justify-between gap-6 text-sm">
          <a href="/" className="">
            ENTRAR
          </a>
          <a href="/">
            ENTRAR
          </a>
      </div>
    </header>
  );
};