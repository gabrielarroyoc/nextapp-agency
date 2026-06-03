'use client'

import {
  ArrowRight,
  Check,
  ChevronDown,
  ClipboardCheck,
  Code2,
  Headphones,
  Menu,
  MessageCircle,
  MonitorPlay,
  PlayCircle,
  Target,
  Video,
  X,
  Zap,
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { LeadForm } from '../components/LeadForm'

const companies = [
  { src: '/companies/mercado-livre.svg', alt: 'Mercado Livre', width: 120 },
  { src: '/companies/vtex.svg', alt: 'VTEX', width: 80 },
  { src: '/companies/globo.svg', alt: 'Globo', width: 110 },
  { src: '/companies/ifood.svg', alt: 'iFood', width: 55 },
  { src: '/companies/itau.svg', alt: 'Itaú', width: 35 },
  { src: '/companies/stone.svg', alt: 'Stone', width: 70 },
  { src: '/companies/compass-uol.svg', alt: 'Compass UOL', width: 180 },
  { src: '/companies/totvs.svg', alt: 'TOTVS', width: 100 },
  { src: '/companies/banco-do-brasil.svg', alt: 'Banco do Brasil', width: 160 },
]

const stats = [
  { value: '+ 1M', label: 'Devs impactados por eventos e conteúdos gratuitos' },
  { value: '+ 600 mil', label: 'Devs e parceiros na plataforma Rocketseat' },
  { value: '+ 220 mil', label: 'Devs na comunidade do Discord' },
]

const platformStats = [
  {
    icon: MonitorPlay,
    value: '+ 15 mil',
    label: 'aulas',
    desc: 'Disponíveis em toda plataforma',
  },
  {
    icon: Video,
    value: '+ 40',
    label: 'projetos',
    desc: 'Para resolver desafios reais na prática',
  },
  {
    icon: Code2,
    value: '+ 30',
    label: 'desafios',
    desc: 'Projetos práticos e quizzes disponíveis',
  },
  {
    icon: MessageCircle,
    value: '+ 150 mil',
    label: 'interações',
    desc: 'Perguntas e respostas no fórum para dúvidas',
  },
]

const ecosystem = [
  {
    title: 'Rocketseat One',
    desc: 'Plataforma de aprendizado contínuo',
    tag: 'Plataforma',
    bgClass: 'bg-zinc-950/40 border-zinc-800',
  },
  {
    title: 'Pós-graduação FTR',
    desc: 'Especialização e pós-graduação acadêmica de alto nível',
    tag: 'Pós-graduação',
    bgClass: 'bg-zinc-950/40 border-zinc-800',
  },
  {
    title: 'Rocketseat para Empresas',
    desc: 'Capacitação e evolução acompanhada para times tech',
    tag: 'Empresas B2B',
    bgClass: 'bg-zinc-950/40 border-zinc-800',
  },
]

const courseFormations = [
  {
    title: 'Formação em React',
    educator: 'Diego Fernandes',
    role: 'Co-fundador e CTO na Rocketseat',
    level: 'Intermediário',
  },
  {
    title: 'Formação em Node.JS',
    educator: 'Diego Fernandes',
    role: 'Co-fundador e CTO na Rocketseat',
    level: 'Intermediário',
  },
  {
    title: 'Formação Full-Stack',
    educator: 'Mayk Brito & Rodrigo',
    role: 'Educadores Principais',
    level: 'Iniciante',
  },
  {
    title: 'Formação: IA para devs',
    educator: 'Daniel Sória',
    role: 'AWS Machine Learning Specialist',
    level: 'Intermediário',
  },
  {
    title: 'Formação em Python',
    educator: 'Casemiro & Ferreira',
    role: 'Especialistas Python',
    level: 'Intermediário',
  },
  {
    title: 'Formação em Java',
    educator: 'Daniele & Gleyson',
    role: 'Especialistas Java',
    level: 'Intermediário',
  },
]

const diagnosticSteps = [
  {
    title: 'Mapeamento',
    description:
      'Entendemos contexto, stack, maturidade e prioridades do time.',
  },
  {
    title: 'Plano de evolução',
    description:
      'Transformamos objetivos de negócio em trilhas e metas de aprendizado.',
  },
  {
    title: 'Execução acompanhada',
    description:
      'A liderança visualiza progresso, consumo e pontos de atenção.',
  },
  {
    title: 'Resultados',
    description:
      'O programa vira rotina de desenvolvimento técnico, não ação pontual.',
  },
]

const specialistCards = [
  {
    icon: ClipboardCheck,
    title: 'Onboarding orientado',
    description:
      'Apoiamos a implantação para que o time comece com clareza e foco.',
  },
  {
    icon: Headphones,
    title: 'Acompanhamento especializado',
    description:
      'Especialistas ajudam a ajustar trilhas e destravar dúvidas do programa.',
  },
  {
    icon: Target,
    title: 'Relatórios acionáveis',
    description:
      'Indicadores apoiam decisões sobre engajamento, evolução e próximos passos.',
  },
]

const planOptions = [
  {
    name: 'Plano Flexível',
    description: 'Para empresas que querem iniciar a formação com autonomia.',
    features: [
      'Acesso à plataforma Rocketseat',
      'Trilhas e projetos práticos',
      'Certificados de conclusão',
      'Indicadores de progresso',
    ],
  },
  {
    name: 'Plano Empresas',
    description: 'Para times que precisam de implantação e acompanhamento.',
    features: [
      'Diagnóstico de maturidade',
      'Onboarding e plano de evolução',
      'Acompanhamento especializado',
      'Relatórios para liderança',
    ],
    highlighted: true,
  },
]

const faqs = [
  {
    question: 'Como funciona o plano para empresas?',
    answer:
      'O time comercial entende o cenário da empresa, recomenda o melhor formato de acesso e acompanha a implantação da plataforma.',
  },
  {
    question: 'Consigo acompanhar o progresso dos colaboradores?',
    answer:
      'Sim. A plataforma oferece indicadores de consumo, progresso, engajamento e conclusão para apoiar a gestão do programa.',
  },
  {
    question: 'Os conteúdos atendem diferentes níveis de senioridade?',
    answer:
      'Sim. As trilhas cobrem fundamentos, especialização e temas avançados para equipes em diferentes momentos.',
  },
  {
    question: 'Existe suporte para dúvidas técnicas?',
    answer:
      'Sim. O programa combina suporte da comunidade, instrutores e recursos de IA para acelerar respostas.',
  },
]

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="bg-[#121214]">
      {/* Top Promotional Banner */}
      <div className="relative z-20 border-b border-zinc-200 bg-white px-4 py-3 text-center text-sm font-semibold text-zinc-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
          <span>Capacite e evolua seu time de devs com a Rocketseat.</span>
          <a
            href="#cadastro"
            className="inline-flex items-center gap-1.5 rounded bg-emerald-600 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-emerald-700"
          >
            Agende uma demonstração gratuita
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white px-4 py-14 text-zinc-950 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          {/* Simple Inline Top Header */}
          <div className="mb-14 flex select-none items-center gap-3">
            <Image
              width={180}
              height={35}
              src="/logo-rocket.svg"
              alt="Rocketseat"
              className="h-7 w-auto brightness-0"
            />
            <span className="border-l border-zinc-300 pl-3 text-sm font-semibold tracking-wider text-zinc-500">
              Para Empresas
            </span>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <h1 className="lg:text-6.5xl max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-zinc-950 sm:text-5xl">
                Capacite seus devs em tecnologias de ponta
                <span className="mx-2 inline-flex select-none items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-100 px-2.5 py-1 align-middle">
                  {/* React Icon */}
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-sky-500 text-[8px] font-bold text-white">
                    R
                  </span>
                  {/* Node Icon */}
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[8px] font-bold text-white">
                    N
                  </span>
                  {/* Python Icon */}
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-yellow-500 text-[8px] font-bold text-white">
                    P
                  </span>
                  {/* Swift Icon */}
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[8px] font-bold text-white">
                    S
                  </span>
                  {/* Kotlin Icon */}
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 text-[8px] font-bold text-white">
                    K
                  </span>
                  {/* HTML Icon */}
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[8px] font-bold text-white">
                    H
                  </span>
                </span>
                e impulsione a produtividade do seu time
                <span className="ml-2 inline-block select-none font-light tracking-normal text-emerald-600">
                  &mdash;&gt;
                </span>
              </h1>

              <div className="border-zinc-150 flex flex-col items-center gap-4 border-t pt-8 sm:flex-row">
                <p className="max-w-[280px] text-sm text-zinc-500">
                  <strong className="font-bold text-zinc-900">
                    +500 empresas
                  </strong>{' '}
                  desenvolvem seus talentos na plataforma Rocketseat
                </p>
                <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-4">
                  {companies.map((company) => (
                    <Image
                      key={company.alt}
                      className="max-h-6 w-auto opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                      src={company.src}
                      width={company.width}
                      height={24}
                      alt={company.alt}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="border-zinc-150 w-full max-w-[400px] space-y-6 rounded-xl border bg-zinc-50 p-8 shadow-sm lg:ml-auto">
              <p className="text-zinc-650 text-sm font-semibold leading-relaxed">
                Conheça todos os benefícios e condições da Rocketseat para
                empresas!
              </p>
              <a
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow transition-all hover:bg-emerald-700"
                href="#cadastro"
              >
                Comece grátis
              </a>
              <span className="block text-center text-xs text-zinc-500">
                Confira nossos{' '}
                <a
                  href="#planos"
                  className="font-bold text-zinc-700 underline hover:text-zinc-950"
                >
                  planos para empresas
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Video & Dashboard Mock Section */}
      <section className="relative flex items-center justify-center bg-zinc-950 px-4 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/20 via-zinc-950/60 to-zinc-950" />
        </div>
        <div className="relative z-20 mx-auto flex w-full max-w-7xl justify-center px-5">
          <div className="relative w-full max-w-[1000px] overflow-hidden rounded-t-xl border-x-[12px] border-t-[12px] border-white/10 bg-white/5 shadow-2xl backdrop-blur-md">
            <Image
              alt="Dashboard da plataforma Rocketseat"
              width={1000}
              height={560}
              className="relative z-10 h-auto w-full opacity-90"
              src="/bg-platform.svg"
            />
          </div>
        </div>
      </section>

      {/* Sticky Navigation Bar */}
      <nav className="sticky top-0 z-50 hidden w-full border-b border-zinc-200/80 bg-white py-3 text-zinc-600 shadow-sm backdrop-blur-sm md:block">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-zinc-500">
            <strong className="text-[10px] font-bold uppercase tracking-wider">
              navegação
            </strong>
            <ArrowRight size={12} className="text-zinc-400" />
          </div>
          <ul className="flex items-center gap-6 text-sm font-semibold text-zinc-500">
            <li>
              <a
                className="transition-colors hover:text-zinc-950"
                href="#sobre"
              >
                Sobre a Rocketseat
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-zinc-950"
                href="#ecossistema"
              >
                Ecossistema
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-zinc-950"
                href="#conteudos"
              >
                Conteúdos
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-zinc-950"
                href="#diagnostico"
              >
                Diagnóstico de IA
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-zinc-950"
                href="#plataforma"
              >
                Plataforma
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-zinc-950"
                href="#depoimentos"
              >
                Depoimentos
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-zinc-950"
                href="#duvidas"
              >
                Dúvidas frequentes
              </a>
            </li>
            <li className="h-4 w-px bg-zinc-200" />
            <li>
              <a
                className="transition-colors hover:text-zinc-950"
                href="#planos"
              >
                Ver planos
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-zinc-950"
                href="#cadastro"
              >
                Entrar
              </a>
            </li>
            <li>
              <a
                className="rounded bg-emerald-600 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-emerald-700"
                href="#cadastro"
              >
                Cadastro
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Sticky Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white py-3 text-zinc-900 shadow-sm backdrop-blur-sm md:hidden">
        <div className="relative mx-auto flex w-full items-center justify-between px-5">
          <div className="flex items-center gap-2 text-zinc-500">
            <strong className="text-[10px] font-bold uppercase tracking-wider">
              navegação
            </strong>
            <ArrowRight size={12} className="text-zinc-400" />
          </div>
          <button
            className="text-zinc-650 flex h-8 w-8 items-center justify-center rounded-md transition hover:bg-zinc-100"
            type="button"
            onClick={() => setIsOpen((state) => !state)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="flex flex-col gap-1 border-t border-zinc-100 bg-white px-5 py-4">
            <a
              className="rounded px-3 py-3 text-sm text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-950"
              href="#sobre"
              onClick={() => setIsOpen(false)}
            >
              Sobre a Rocketseat
            </a>
            <a
              className="rounded px-3 py-3 text-sm text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-950"
              href="#ecossistema"
              onClick={() => setIsOpen(false)}
            >
              Ecossistema
            </a>
            <a
              className="rounded px-3 py-3 text-sm text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-950"
              href="#conteudos"
              onClick={() => setIsOpen(false)}
            >
              Conteúdos
            </a>
            <a
              className="rounded px-3 py-3 text-sm text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-950"
              href="#diagnostico"
              onClick={() => setIsOpen(false)}
            >
              Diagnóstico de IA
            </a>
            <a
              className="rounded px-3 py-3 text-sm text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-950"
              href="#plataforma"
              onClick={() => setIsOpen(false)}
            >
              Plataforma
            </a>
            <a
              className="rounded px-3 py-3 text-sm text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-950"
              href="#depoimentos"
              onClick={() => setIsOpen(false)}
            >
              Depoimentos
            </a>
            <a
              className="rounded px-3 py-3 text-sm text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-950"
              href="#duvidas"
              onClick={() => setIsOpen(false)}
            >
              Dúvidas frequentes
            </a>
            <hr className="my-2 border-zinc-100" />
            <a
              className="text-zinc-650 rounded px-3 py-3 text-sm transition hover:bg-zinc-50 hover:text-zinc-950"
              href="#planos"
              onClick={() => setIsOpen(false)}
            >
              Ver planos
            </a>
            <a
              className="text-zinc-650 rounded px-3 py-3 text-sm transition hover:bg-zinc-50 hover:text-zinc-950"
              href="#cadastro"
              onClick={() => setIsOpen(false)}
            >
              Entrar
            </a>
            <a
              className="mt-2 rounded bg-emerald-600 px-4 py-3 text-center text-sm font-bold uppercase tracking-wider text-white"
              href="#cadastro"
              onClick={() => setIsOpen(false)}
            >
              Cadastro
            </a>
          </div>
        )}
      </nav>

      {/* About Section */}
      <section
        id="sobre"
        className="scroll-mt-20 border-b border-zinc-200/80 bg-zinc-50 px-4 py-24 text-zinc-950 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-4xl">
              Construímos o futuro da tecnologia através do ensino de
              programação
            </h2>
            <p className="text-zinc-650 text-lg leading-relaxed">
              A Rocketseat é uma das maiores escolas de tecnologia da América
              Latina, com mais de 262 mil pessoas formadas e tem a missão de
              impulsionar vidas através da educação e tecnologia. Acompanhamos
              cada desenvolvedor do seu time.
            </p>
          </div>

          <div className="grid gap-6 border-t border-zinc-200 pt-12 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                className="border-zinc-150 rounded-xl border bg-white p-8 shadow-sm transition-all hover:shadow-md"
                key={stat.value}
              >
                <span className="mb-2 block text-4xl font-extrabold text-emerald-600 sm:text-5xl">
                  {stat.value}
                </span>
                <span className="block text-sm font-semibold leading-relaxed text-zinc-600">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section
        id="ecossistema"
        className="relative scroll-mt-20 overflow-hidden bg-zinc-950 px-4 py-24 text-white sm:px-6 lg:px-8"
      >
        <div className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-rocket-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-rocket-400">
              Ecossistema completo
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Um ecossistema completo para a aceleração de equipes
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-zinc-400">
              Uma plataforma completa de ensino de tecnologia que impulsiona
              desenvolvedores e empresas em todas as etapas de sua jornada.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {ecosystem.map((item) => (
              <div
                className={`group flex flex-col justify-between rounded-lg border p-6 transition-all hover:bg-zinc-900/50 ${item.bgClass}`}
                key={item.title}
              >
                <div>
                  <span className="mb-4 inline-block rounded border border-rocket-500/20 bg-rocket-500/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-rocket-400">
                    {item.tag}
                  </span>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                    {item.desc}
                  </p>
                </div>
                <div className="relative h-40 overflow-hidden rounded-md border border-zinc-800 bg-zinc-950">
                  <Image
                    src="/bg-platform.svg"
                    fill
                    className="object-cover opacity-60 transition-all duration-300 group-hover:scale-105"
                    alt={item.title}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Samuel Nunes Testimonial Panel */}
          <div
            id="depoimentos"
            className="border-zinc-850 mt-20 grid scroll-mt-20 items-center gap-8 border-t pt-16 lg:grid-cols-[0.25fr_1fr]"
          >
            <div className="flex flex-col items-center lg:items-start">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-rocket-500 bg-zinc-800 text-xl font-bold text-white">
                SN
              </div>
            </div>
            <blockquote className="text-xl font-medium leading-relaxed text-zinc-300 sm:text-2xl">
              “Plataforma bem dinâmica tanto para os gestores quanto para os
              desenvolvedores. Parabéns a toda equipe Rocketseat.”
              <footer className="mt-4 text-xs font-bold uppercase tracking-wider text-zinc-500">
                Samuel Nunes &mdash; gen fertilizantes
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Continuous Learning (Stats) Section */}
      <section
        id="plataforma"
        className="scroll-mt-20 bg-white px-4 py-24 text-zinc-950 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Conteúdos e Prática
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Aprendizado contínuo para todos os níveis e momentos de carreira
              </h2>
            </div>
            <p className="text-zinc-650 leading-relaxed">
              Do zero à especialização, a plataforma da Rocketseat oferece
              conteúdos para formar profissionais altamente qualificados para o
              mercado. Acompanhamos todas as etapas da carreira dos seus
              colaboradores, com aulas que vão do código ao desenvolvimento
              profissional.
            </p>
          </div>

          <div className="border-zinc-150 grid gap-6 border-t pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {platformStats.map((item) => (
              <div
                className="border-zinc-150 flex flex-col rounded-xl border bg-zinc-50 p-6"
                key={item.label}
              >
                <div className="mb-4 inline-block self-start rounded-lg bg-emerald-100/50 p-2.5 text-emerald-600">
                  <item.icon size={22} />
                </div>
                <span className="mb-1 text-3xl font-extrabold text-zinc-950">
                  {item.value} {item.label}
                </span>
                <p className="text-sm text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations (Trails grid) Section */}
      <section
        id="conteudos"
        className="relative scroll-mt-20 bg-zinc-900 px-4 py-24 text-white sm:px-6 lg:px-8"
      >
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-rocket-400">
                Formações
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Formações que o seu time terá acesso
              </h2>
            </div>
            <p className="max-w-md text-sm text-zinc-400">
              Capacitação para inovação, tecnologias de ponta e conteúdos do
              zero ao avançado em um só lugar.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courseFormations.map((course) => (
              <div
                className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-950/60 p-6 transition-all duration-300 hover:border-rocket-500/30"
                key={course.title}
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="rounded border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                      {course.level}
                    </span>
                    <Zap className="h-4 w-4 text-rocket-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {course.title}
                  </h3>
                  <p className="mb-6 text-xs leading-relaxed text-zinc-500">
                    Instrutor principal:{' '}
                    <strong className="text-zinc-350">{course.educator}</strong>{' '}
                    &mdash; {course.role}
                  </p>
                </div>
                <a
                  href="#cadastro"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rocket-400 hover:text-rocket-300"
                >
                  Saber mais
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IA Diagnosis Section (#diagnostico) */}
      <section
        id="diagnostico"
        className="scroll-mt-20 bg-zinc-50 px-4 py-24 text-zinc-900 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative flex min-h-[440px] flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl lg:flex-row">
            <div className="relative min-h-[300px] w-full lg:min-h-full lg:w-1/2">
              <Image
                alt="Maturidade em IA"
                fill
                className="object-cover"
                src="/bg-platform.svg"
              />
            </div>
            <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-12">
              <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-emerald-600">
                Diagnóstico para empresas tech
              </span>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-zinc-950">
                Descubra o nível de maturidade em IA da sua empresa
              </h2>
              <p className="text-zinc-650 mb-6 leading-relaxed">
                Avalie como sua empresa está usando Inteligência Artificial e
                receba recomendações personalizadas para capacitar seu time e
                acelerar projetos.
              </p>
              <a
                href="#cadastro"
                className="mb-8 inline-flex w-fit items-center gap-2 rounded-lg bg-emerald-600 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white shadow shadow-emerald-600/10 transition-all hover:bg-emerald-700"
              >
                fazer diagnóstico gratuito
                <ArrowRight size={16} />
              </a>
              <div className="border-zinc-150 flex items-center gap-4 border-t pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 text-xs font-bold text-zinc-600">
                  DO
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">
                    Co-criação: Daniel Orlean
                  </h4>
                  <p className="text-xs text-zinc-500">
                    Engenheiro de Software e conselheiro de empresas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostics / Steps Section */}
      <section className="border-t border-zinc-100 bg-white px-4 py-24 text-zinc-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-rocket-500">
              Fluxo de aceleração
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Como levamos seu time para o próximo nível
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {diagnosticSteps.map((step, index) => (
              <div
                className="border-zinc-150 rounded-lg border bg-zinc-50 p-6 shadow-sm transition-all hover:shadow"
                key={step.title}
              >
                <span className="mb-4 block text-2xl font-extrabold text-rocket-500">
                  0{index + 1}
                </span>
                <h3 className="mb-2 text-lg font-bold text-zinc-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="border-zinc-150 mt-16 grid gap-6 border-t pt-16 md:grid-cols-3">
            {specialistCards.map((card) => (
              <div className="flex items-start gap-4" key={card.title}>
                <div className="flex-none rounded-lg bg-rocket-50 p-3 text-rocket-500">
                  <card.icon size={22} />
                </div>
                <div>
                  <h4 className="mb-2 text-base font-bold text-zinc-900">
                    {card.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-zinc-600">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Form Section */}
      <section className="border-zinc-150 border-t bg-zinc-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6 lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-widest text-rocket-500">
              Demonstração gratuita
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Fale com nosso time de especialistas
            </h2>
            <p className="text-lg leading-relaxed text-zinc-600">
              Preencha o formulário para agendar um diagnóstico gratuito e
              receber um contato comercial personalizado para montar o melhor
              plano para a sua empresa.
            </p>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-zinc-200 bg-zinc-200 shadow-lg">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-900/60 to-transparent" />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <span className="flex h-14 w-14 animate-pulse cursor-pointer items-center justify-center rounded-full bg-rocket-500 text-white shadow-xl transition-all hover:scale-105">
                  <PlayCircle size={28} />
                </span>
              </div>
              <Image
                src="/bg-platform.svg"
                fill
                className="object-cover"
                alt="Fale com especialista mockup"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow-2xl">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section
        id="planos"
        className="scroll-mt-20 bg-emerald-950 px-4 py-24 text-white sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-emerald-400">
              Planos e preços
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Escolha o melhor plano para sua empresa
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-emerald-200/70">
              Conte com uma solução flexível e ajustável para acelerar a
              evolução técnica do seu time de engenharia.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {planOptions.map((plan) => (
              <div
                className={`flex flex-col justify-between rounded-lg border p-8 ${
                  plan.highlighted
                    ? 'relative border-white bg-white text-zinc-900 shadow-2xl'
                    : 'border-emerald-800/40 bg-emerald-900/20 text-white'
                }`}
                key={plan.name}
              >
                {plan.highlighted && (
                  <span className="absolute right-4 top-4 rounded bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    Recomendado
                  </span>
                )}
                <div>
                  <h3 className="mb-3 text-2xl font-extrabold">{plan.name}</h3>
                  <p
                    className={`mb-8 text-sm ${plan.highlighted ? 'text-zinc-500' : 'text-emerald-300'}`}
                  >
                    {plan.description}
                  </p>
                  <ul className="mb-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        className="flex items-center gap-3 text-sm"
                        key={feature}
                      >
                        <span
                          className={`inline-flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                            plan.highlighted
                              ? 'bg-emerald-100 text-emerald-600'
                              : 'bg-emerald-900 text-emerald-400'
                          }`}
                        >
                          <Check size={12} className="stroke-[3]" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#cadastro"
                  className={`block rounded py-3.5 text-center text-xs font-bold uppercase tracking-wider transition-all ${
                    plan.highlighted
                      ? 'bg-emerald-600 text-white shadow-md hover:bg-emerald-700'
                      : 'border border-emerald-600 text-white hover:bg-emerald-900/20'
                  }`}
                >
                  Conversar com vendas
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="duvidas"
        className="scroll-mt-20 border-b border-zinc-100 bg-white px-4 py-24 text-zinc-900 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-rocket-500">
              Dúvidas frequentes
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
              Perguntas e respostas sobre a Rocketseat Empresas
            </h2>
          </div>

          <div className="divide-y divide-zinc-200 border-y border-zinc-200">
            {faqs.map((faq) => (
              <details className="group py-6" key={faq.question}>
                <summary className="flex cursor-pointer select-none list-none items-center justify-between gap-4 text-base font-bold text-zinc-900">
                  {faq.question}
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-500 transition-all duration-200 group-hover:text-zinc-900">
                    <ChevronDown
                      size={14}
                      className="transition-all duration-300 group-open:rotate-180"
                    />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-rocket-900 to-zinc-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-rocket-500/10 blur-[80px]" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-rocket-400">
              Pronto para começar?
            </p>
            <h2 className="max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              Chegou a hora de investir no time que move a sua empresa
            </h2>
          </div>
          <a
            className="inline-flex items-center justify-center gap-2 rounded bg-white px-7 py-4 text-sm font-bold uppercase tracking-wider text-rocket-900 shadow-lg transition-all hover:bg-zinc-100"
            href="#cadastro"
          >
            Solicitar proposta
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  )
}
