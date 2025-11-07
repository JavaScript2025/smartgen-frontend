import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import FormCategoria from "../formCategoria/FormCategoria";

export default function ModalCategoria() {
  return (
    <Popup
      trigger={
        <button className="border rounded px-4 py-2 bg-white text-indigo-800 hover:bg-indigo-50">
          Nova Categoria
        </button>
      }
      modal
      contentStyle={{ borderRadius: "1rem", paddingBottom: "2rem" }}
    >
      <div className="p-4">
        <FormCategoria />
      </div>
    </Popup>
  );
}
