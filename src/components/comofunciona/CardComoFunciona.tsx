import { DeviceMobileIcon, HandshakeIcon } from "@phosphor-icons/react";

function CardComoFunciona() {
  return (
    <>
      <section className="bg-blue-400">
        <div className="container mx-auto">
          <div className="px-8 py-8 lg:py-11">
            <h2 className="w-[250px] text-2xl inline-flex items-center justify-center font-semibold text-blue-50 md:w-full md:text-5xl lg:leading-[130%] ">
              Como funciona o SmartGen?
            </h2>
            <div className="mb-4 mt-6 grid grid-cols-1 gap-4 md:mb-6 md:grid-cols-3 md:gap-6">
              {/* <div className="flex flex-col rounded-2xl bg-blue-200 p-4">
                <BuildingOfficeIcon size={32} color="#4b80fb" />
                <div className="flex flex-col gap-4 ">
                  <h3 className="text-3xl font-semibold">01. Empresas contratam</h3>
                  <p>
                    Contrate a SmartGen para os seus colaboradores terem acesso
                    aos serviços de bem-estar.
                  </p>
                </div>
              </div> */}
              <div className="flex flex-col rounded-2xl bg-blue-50 p-4">
                <div className="flex flex-col gap-4">
                  <DeviceMobileIcon size={32} color="#4b80fb" />
                  <h3 className="text-3xl font-semibold">
                    01. Empresas contratam
                  </h3>
                  <p>
                    Contrate a SmartGen para os seus colaboradores terem acesso
                    aos serviços de bem-estar.
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-2xl bg-blue-50 p-4">
                <div className="flex flex-col gap-4">
                  <DeviceMobileIcon size={32} color="#4b80fb" />
                  <h3 className="text-3xl font-semibold">
                    02. Colaboradores escolhem
                  </h3>
                  <p>
                    Seus colaboradores escolhem o plano que melhor combina com
                    cada estilo de vida.
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-2xl bg-blue-50 p-4">
                <div className="flex flex-col gap-4">
                  <HandshakeIcon size={32} color="#4b80fb" />
                  <h3 className="text-3xl font-semibold">
                    03. Aproveitam o benefício
                  </h3>
                  <p>
                    Com o plano ativo, é só acessar o app SmartGen e escolher
                    Com o plano ativo, é só acessar o app SmartGen e escolher
                    entre as milhares de opções de academias e serviços de
                    bem-estar.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto flex max-w-md flex-col gap-5 md:flex-row bg-blue-500 rounded-[42px] text-white">
              <a
                className="rounded-[42px] inline-flex items-center justify-center py-4 px-8 hover:text-neutral-90 text-base transition bg-primary-40 text-neutral-90 hover:bg-blue-900 w-full"
                target="_self"
                href="/br/corporativo/"
              >
                Entre em contato!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardComoFunciona;
