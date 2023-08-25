import Image from 'next/image'

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-lg px-4">
      <section className="flex  select-none flex-col items-center justify-center gap-4 py-32">
        <div className="mx-auto w-full max-w-[1256px] space-y-[60px] lg:space-y-20">
          <div className="flex w-full flex-col items-center gap-6 px-5 text-center">
            <div className="max-w-[727px] space-y-4">
              <h2 className="text-center text-base font-medium text-purpleRocket">
                PLATAFORMA PARA SUA EMPRESA
              </h2>
              <h2 className="text-center text-5xl font-bold text-white">
                Impulsione a produtividade e leve <br></br> seu time para o
                próximo nível
              </h2>
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
            width="965"
            height="800"
            className="min-h-[256px] w-full min-w-[365px] object-cover object-left pl-5 pr-[-20px] md:px-5"
            alt=""
            src={'/bg-platform.svg'}
          />
        </div>
        <Image
          fill
          className="z-[-1] max-h-[88%] object-cover object-left-top pt-16"
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
    </main>
  )
}
