import Image from 'next/image'

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto px-4">
      <section className="py-32 flex flex-col justify-center gap-4 items-center select-none">
        <h2 className="text-base font-medium text-center text-purpleRocket">
          PLATAFORMA PARA SUA EMPRESA
        </h2>
        <h2 className="text-5xl font-bold text-white text-center">
          Impulsione a produtividade e leve <br></br> seu time para o próximo nível
        </h2>

        <h2 className="text-xl  font-regular text-white mt-4 text-center">
          Engajar, capacitar e acompanhar o aprendizado do seu <br></br> time de devs nunca foi tão simples.
        </h2>
      </section>
    </main>
  )
}
