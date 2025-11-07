import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import FormPostagem from "../formpostagem/FormPostagem";

export default function ModalPostagem() {
  return (
    <Popup
      trigger={
        <button className="border rounded px-4 py-2 bg-white text-indigo-800 hover:bg-indigo-50">
          Nova Empresa
        </button>
      }
      modal
      contentStyle={{ borderRadius: "1rem", paddingBottom: "2rem" }}
    >
      <div className="p-4">
        <FormPostagem />
      </div>
    </Popup>
  );
}
