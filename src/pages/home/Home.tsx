import CardComoFunciona from "../../components/comofunciona/CardComoFunciona";
import FeedBack from "../../components/feedback/FeedBack";
import CarrosselPostagens from "../../components/empresa/carrossel/CarrosselPostagens";
import logo from "../../utils/imgs/logo/logo.svg";
// import IMCCalculator from "../../components/imc/IMCCalculator";
import ModalImc from "../../components/imc/modalImc/ModalImc";
import { Barbell } from "@phosphor-icons/react";

function Home() {
  return (
    <>
      <div className="bg-gray-200 flex justify-center">
        <div className="container grid grid-cols-1 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <img src={logo} alt="Logo" className="w-100 h-50" />

            {/* <h2 className="text-5xl font-bold text-gray-600">SmartGen</h2> */}
            <p className="text-xl text-gray-500">
              Cadastre e explore empresas por categoria
            </p>
          </div>

          {/* <div className="flex justify-center">
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div> */}
        </div>
      </div>

      <CarrosselPostagens />
      <CardComoFunciona />
      <FeedBack />
      <section className="py-12 md:py-20 lg:py-24 bg-white">
        {" "}
        {/* Adiciona padding vertical e cor de fundo para a seção */}
        <div className="container mx-auto px-4 md:px-8">
          {/* Título Centralizado e com Margem Inferior */}
          <h2 className="text-3xl font-bold text-center mb-10 md:text-5xl lg:text-6xl text-gray-800">
            Importância da Sua Saúde e Bem-Estar
          </h2>

          {/* Conteúdo Principal: Descrição da Saúde */}
          <div className="max-w-4xl mx-auto text-lg text-gray-600 space-y-6 text-center">
            <p className="font-medium md:text-xl lg:text-2xl text-blue-600">
              A saúde é, sem dúvida, nosso bem mais precioso. Ela é o alicerce
              para que possamos viver com qualidade, energia e liberdade para
              realizar nossos sonhos e enfrentar os desafios do dia a dia.
            </p>

            <div className="flex justify-center items-center py-4">
              {" "}
              <span className="text-blue-500">
                <Barbell size={48} />
              </span>
            </div>

            <h3 className="text-xl font-semibold mt-8 md:text-2xl text-gray-800">
              Como saber se você está no caminho certo?
            </h3>

            <p className="pb-4">
              Uma das ferramentas mais simples e universalmente reconhecidas
              para avaliar o estado nutricional e ter um ponto de partida nessa
              jornada é o Índice de Massa Corporal (IMC) Ele é um cálculo rápido
              que relaciona seu peso e sua altura.
            </p>
          </div>

          <div className="flex justify-center">
            <ModalImc />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
