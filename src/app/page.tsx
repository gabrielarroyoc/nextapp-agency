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
      <section>
        <div>
          <h3 className="text-center text-base font-medium  text-purpleRocket">
            EMPRESAS QUE JÁ LEVARAM SEUS DEVS PARA O <br />
            PRÓXIMO NÍVEL
          </h3>
          <div className="hidden xl:my-[60px] xl:flex xl:flex-col xl:gap-[60px]">
            <div className="flex justify-center gap-10">
              <Image
                src={'/companies/mercado-livre.svg'}
                width={150}
                alt="mercado livre"
                height={150}
              />
              <Image
                src={'/companies/vtex.svg'}
                width={150}
                alt="vtex"
                height={150}
              />
              <Image
                src={'/companies/globo.svg'}
                width={150}
                alt="globo"
                height={150}
              />
              <Image
                src={'/companies/ifood.svg'}
                width={150}
                alt="ifood"
                height={150}
              />
              <Image
                src={'/companies/itau.svg'}
                width={150}
                alt="itau"
                height={150}
              />
              <Image
                src={'/companies/stone.svg'}
                width={150}
                alt="stone"
                height={150}
              />
              <Image
                src={'/companies/compass-uol.svg'}
                width={150}
                alt="compass-uol"
                height={150}
              />
              <Image
                src={'/companies/totvs.svg'}
                width={150}
                alt="totvs"
                height={150}
              />
            </div>
            <div className="flex justify-center gap-10">
              <Image
                src={'/companies/accenture.svg'}
                width={150}
                alt="accenture"
                height={150}
              />
              <Image
                src={'/companies/twilio.svg'}
                width={150}
                alt="twilio"
                height={150}
              />
              <Image
                src={'/companies/riachuelo.svg'}
                width={150}
                alt="riachuelo"
                height={150}
              />
              <Image
                src={'/companies/suzano.svg'}
                width={150}
                alt="suzano"
                height={150}
              />
              <Image
                src={'/companies/datadog.svg'}
                width={150}
                alt="datadog"
                height={150}
              />
              <Image
                src={'/companies/invillia.svg'}
                width={150}
                alt="invillia"
                height={150}
              />
              <Image
                src={'/companies/fcamara.svg'}
                width={150}
                alt="fcamara"
                height={150}
              />
            </div>
            <div className="flex justify-center gap-10">
              <Image
                src={'/companies/thoughtworks.svg'}
                width={150}
                alt="thoughtworks"
                height={150}
              />
              <Image
                src={'/companies/banco-do-brasil.svg'}
                width={150}
                alt="banco-do-brasil"
                height={150}
              />
              <Image
                src={'/companies/ambev-tech.svg'}
                width={150}
                alt="ambev-tech"
                height={150}
              />
              <Image
                src={'/companies/radix.svg'}
                width={150}
                alt="radix"
                height={150}
              />
              <Image
                src={'/companies/luizalabs.svg'}
                width={150}
                alt="luizalabs"
                height={150}
              />
            </div>
          </div>
        </div>
        <a
          className="flex w-full max-w-[233px] rounded-md border border-rocket-500 bg-rocket-500 px-6 py-4"
          href="/"
        >
          QUERO SABER MAIS
        </a>
      </section>
    </main>
  )
}
