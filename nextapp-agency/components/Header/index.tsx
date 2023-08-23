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
        <div className="text-4xl font-bold text-white select-none">Rocketseat</div>
      </Link>

      <div className="">
        <nav className="">
          {nav.map((item) => {
            const { href, label } = item;

            return (
              <Link href={href} key={href}>
                <span className={`text-sm text-white hover:text-zinc-900 transition duration-300 ease-in-out cursor-pointer`}>{label}</span>
              </Link>
            );
          })}
        </nav>

      </div>
    </header>
  );
};