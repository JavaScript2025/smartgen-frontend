import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import IMCCalculator from "../IMCCalculator";

export default function ModalImc() {
  return (
    <Popup
      trigger={
        <button className="cursor-pointer px-10 mx-auto mt-10 max-w-xs flex flex-col gap-5 p-4 md:max-w-sm bg-blue-600 rounded-3xl shadow-xl text-white transition-all duration-300 hover:bg-blue-700">
          Calcule seu IMC
        </button>
      }
      modal
      contentStyle={{ borderRadius: "1rem", paddingBottom: "2rem" }}
    >
      <div className="p-4">
        <IMCCalculator />
      </div>
    </Popup>
  );
}
