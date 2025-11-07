import CardComoFunciona from "../../components/comofunciona/CardComoFunciona";
import FeedBack from "../../components/feedback/FeedBack";
import CarrosselPostagens from "../../components/empresa/carrossel/CarrosselPostagens";
import logo from '../../utils/imgs/logo/logo.svg'
import IMCCalculator from "../../components/imc/IMCCalculator";

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
      <IMCCalculator />
    </>
  );
}

export default Home;
