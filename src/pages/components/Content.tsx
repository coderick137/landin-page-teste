import Image from "next/image";
import imageh from '../../assets/imageHvex.png'

export function Content() {
  return (
    <div className="py-16 sm:py-24 lg:py-8 flex justify-between">
      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tenha Informações em tempo real das condições dos ativos e com o monitoramento inteligente.
            </h1>
            <p className="mt-8 text-md leading-6 text-zinc-300 hover:text-zinc-100">
              Tenha acesso a informações em tempo real, administração remota de dados importantes da rede elétrica como: tensão, corrente, potência passante, energia, temperatura, sobrecarga entre outros, mapeando seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas técnicas e não técnicas.
            </p>
            <div className="mt-40 flex items-center justify-center gap-x-6 lg:justify-start">
              <button
                className="rounded-md bg-[#00B6DE] px-3.5 py-2.5 text-sm font-semibold text-zinc-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00B6DE]"
              >
                Quero mais informações
              </button>
            </div>
          </div>
          <Image
            src={imageh}
            alt=""
            className="bg-transparent"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}