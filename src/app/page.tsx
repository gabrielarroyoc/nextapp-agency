import {
  Building2,
  Code2,
  Briefcase,
  Mail,
  Smartphone,
  User2,
  Users2,
  Store,
  ChevronDown,
} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-lg px-4">
      <section className="flex  select-none flex-col items-center justify-center gap-4 py-32">
        <div className="mx-auto w-full max-w-[1256px] space-y-[60px] lg:space-y-20">
          <div className="flex w-full flex-col items-center gap-6 px-5 text-center">
            <div className="max-w-[727px] space-y-4">
              <h3 className="text-center text-base font-medium text-purpleRocket">
                PLATAFORMA PARA SUA EMPRESA
              </h3>
              <h1 className="text-center text-5xl font-bold text-white">
                Impulsione a produtividade e leve <br></br> seu time para o
                próximo nível
              </h1>
            </div>
            <p className="font-regular  mt-4 text-center text-xl text-white">
              Engajar, capacitar e acompanhar o aprendizado do seu <br></br>{' '}
              time de devs nunca foi tão simples.
            </p>
            <a
              className="rounded-md border border-rocket-500 bg-rocket-500 px-6 py-4"
              href="/"
            >
              DEMONSTRAÇÃO GRATUITA
            </a>
          </div>
          <Image
            width="2000"
            height="2000"
            className="object-cover object-left pl-5 pr-[-20px] md:px-5 "
            alt=""
            src={'/bg-platform.svg'}
          />
        </div>
        <Image
          fill
          className="brightness-40 z-[-1] max-h-[88%] object-cover object-left-top pt-16 blur-[1px]"
          alt="imagem de fundo"
          src={'/bg-hero-section.svg'}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: 'transparent',
          }}
        />
      </section>
      <section className="pb-36">
        <div className="items-center text-center">
          <h3 className="text-center text-base font-medium uppercase   text-purpleRocket">
            empresas que já levaram seus devs para o <br />
            próximo nível
          </h3>
          <div className="hidden xl:my-[60px] xl:flex xl:flex-col xl:gap-[60px]">
            <div className="flex justify-center gap-10">
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/mercado-livre.svg'}
                width={120}
                alt="mercado livre"
                height={30}
              />
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/vtex.svg'}
                width={80}
                alt="vtex"
                height={30}
              />
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/globo.svg'}
                width={110}
                alt="globo"
                height={30}
              />
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/ifood.svg'}
                width={55}
                alt="ifood"
                height={30}
              />
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/itau.svg'}
                width={35}
                alt="itau"
                height={35}
              />
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/stone.svg'}
                width={70}
                alt="stone"
                height={30}
              />
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/compass-uol.svg'}
                width={180}
                alt="compass-uol"
                height={30}
              />
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/totvs.svg'}
                width={100}
                alt="totvs"
                height={30}
              />
            </div>
            <div className="flex justify-center gap-10">
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/accenture.svg'}
                width={115}
                alt="accenture"
                height={30}
              />
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/twilio.svg'}
                width={90}
                alt="twilio"
                height={30}
              />
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/riachuelo.svg'}
                width={140}
                alt="riachuelo"
                height={16}
              />
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/suzano.svg'}
                width={130}
                alt="suzano"
                height={30}
              />
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/datadog.svg'}
                width={115}
                alt="datadog"
                height={30}
              />
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/invillia.svg'}
                width={90}
                alt="invillia"
                height={30}
              />
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/fcamara.svg'}
                width={100}
                alt="fcamara"
                height={30}
              />
            </div>
            <div className="flex justify-center gap-10">
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/thoughtworks.svg'}
                width={150}
                alt="thoughtworks"
                height={30}
              />
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/banco-do-brasil.svg'}
                width={180}
                alt="banco-do-brasil"
                height={30}
              />
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/ambev-tech.svg'}
                width={175}
                alt="ambev-tech"
                height={30}
              />
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/radix.svg'}
                width={60}
                alt="radix"
                height={20}
              />
              <Image
                className="transition duration-200 ease-in-out hover:scale-110"
                src={'/companies/luizalabs.svg'}
                width={100}
                alt="luizalabs"
                height={40}
              />
            </div>
          </div>
          <a
            className="rounded-md border border-rocket-500 bg-rocket-500 px-8 py-5 uppercase"
            href="/"
          >
            quero ser um parceiro
          </a>
        </div>
      </section>
      <div className="flex h-[2px] w-full items-center justify-center bg-gradient-radial-gray"></div>
      <section className="py-36">
        <div>
          <h3 className="mb-4 text-center text-base font-medium tracking-widest  text-purpleRocket">
            SIMPLES E FÁCIL
          </h3>
          <h2
            className="pb-8 text-center text-2xl font-bold 
       text-white"
          >
            Entenda como funciona
          </h2>

          <div className="mt-7 border border-b-0 border-gray-600 text-white md:grid md:grid-cols-3 md:divide-x">
            <div className="flex flex-col border-b border-gray-600 p-6 hover:bg-gray-800">
              <span className="text-2xl text-gray-400">01</span>
              <span className="pt-6 text-xl text-gray-100">
                Cadastre sua empresa através do formulário clicando{' '}
                <a href="/" className="text-green-500 underline">
                  aqui
                </a>
              </span>
            </div>
            <div className="flex flex-col border-b border-gray-600 p-6 hover:bg-gray-800">
              <span className="text-2xl text-gray-400">02</span>
              <span className="pt-6 text-xl text-gray-100">
                Nosso time entra em contato para agendar uma demonstração
              </span>
            </div>
            <div className="flex flex-col border-b border-gray-600 p-6 hover:bg-gray-800">
              <span className="text-2xl text-gray-400">03</span>
              <span className="pt-6 text-xl text-gray-100">
                Faça a assinatura de nossa plataforma com condições especiais
              </span>
            </div>
            <div className="flex flex-col border-b border-gray-600 p-6 hover:bg-gray-800">
              <span className="text-2xl text-gray-400">04</span>
              <span className="pt-6 text-xl text-gray-100">
                Gerencie as licenças e acessos para seu time
              </span>
            </div>
            <div className="flex flex-col border-b border-gray-600 p-6 hover:bg-gray-800">
              <span className="text-2xl text-gray-400">05</span>
              <span className="pt-6 text-xl text-gray-100">
                Acompanhe o andamento do seu time através de dashboards e
                relatórios
              </span>
            </div>
            <div className="flex flex-col border-b border-gray-600 p-6 hover:bg-gray-800">
              <span className="text-2xl text-gray-400">06</span>
              <span className="pt-6 text-xl text-gray-100">
                Leve os conhecimentos do seu time para o próximo nível, do zero
                ao avançado.
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="flex h-[2px] w-full items-center justify-center bg-gradient-radial-gray">
        {' '}
        <button className="flex h-10 w-10 flex-col items-center justify-center rounded-full bg-purpleRocket hover:scale-110">
          {' '}
          <ChevronDown className="h-2 w-3 animate-pulse"></ChevronDown>
          <ChevronDown className="h-2 w-3 animate-pulse"></ChevronDown>
        </button>
      </div>
      <section className="max-[494px]: relative flex w-full flex-col content-center gap-14 py-36">
        <h2 className="z-10 text-center	text-4xl font-bold">
          Capacite e evolua seu time de devs com a Rocketseat
        </h2>
        <div className="rounded- z-10 w-full overflow-hidden rounded-[10px] border border-transparent bg-gradient-to-b from-gray-600 to-gray-800 bg-origin-border ">
          <form className="gap-4 bg-gray-900 p-8">
            <h3 className="text-2xl">Solicite uma demonstração gratuita</h3>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div>
                <div className="relative rounded-[5px]">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <User2 className="h-4 w-4" />
                  </div>
                  <input
                    className="h-[54px] w-full min-w-[288px] rounded-[5px] border border-gray-700 bg-gray-700 p-2.5 pl-10 text-white placeholder-gray-200 outline-none hover:border hover:border-rocket-500"
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-[5px]">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    className="h-[54px] w-full min-w-[288px] rounded-[5px] border border-gray-700 bg-gray-700 p-2.5 pl-10 text-white placeholder-gray-200 outline-none hover:border hover:border-rocket-500"
                    type="text"
                    name="email"
                    placeholder="Digite seu e-mail"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-[5px]">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Smartphone className="h-4 w-4" />
                  </div>
                  <input
                    className="h-[54px] w-full min-w-[288px] rounded-[5px] border border-gray-700 bg-gray-700 p-2.5 pl-10 text-white placeholder-gray-200 outline-none hover:border hover:border-rocket-500"
                    type="text"
                    name="telefone"
                    placeholder="Número de telefone"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-[5px]">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <input
                    className="h-[54px] w-full min-w-[288px] rounded-[5px] border border-gray-700 bg-gray-700 p-2.5 pl-10 text-white placeholder-gray-200 outline-none hover:border hover:border-rocket-500"
                    type="text"
                    name="empresa"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-[5px]">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Users2 className="h-4 w-4" />
                  </div>
                  <input
                    className="h-[54px] w-full min-w-[288px] rounded-[5px] border border-gray-700 bg-gray-700 p-2.5 pl-10 text-white placeholder-gray-200 outline-none hover:border hover:border-rocket-500"
                    type="text"
                    name="employees"
                    placeholder="Quantidade de funcionários"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-[5px]">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Code2 className="h-4 w-4" />
                  </div>
                  <input
                    className="h-[54px] w-full min-w-[288px] rounded-[5px] border border-gray-700 bg-gray-700 p-2.5 pl-10 text-white placeholder-gray-200 outline-none hover:border hover:border-rocket-500"
                    type="text"
                    name="Devs"
                    placeholder="Quantidade de Devs"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-[5px]">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <input
                    className="h-[54px] w-full min-w-[288px] rounded-[5px] border border-gray-700 bg-gray-700 p-2.5 pl-10 text-white placeholder-gray-200 outline-none hover:border hover:border-rocket-500"
                    type="text"
                    name="cargo"
                    placeholder="Qual seu cargo"
                  />
                </div>
              </div>
              <div>
                <div className="relative rounded-[5px]">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Store className="h-4 w-4" />
                  </div>
                  <input
                    className="h-[54px] w-full min-w-[288px] rounded-[5px] border border-gray-700 bg-gray-700 p-2.5 pl-10 text-white placeholder-gray-200 outline-none hover:border hover:border-rocket-500"
                    type="text"
                    name="segmento"
                    placeholder="Segmento da empresa"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <Image
          fill
          className="absolute z-[-1]"
          src="/vector-section.svg"
          alt="Background-Section"
        ></Image>
      </section>
    </main>
  )
}
