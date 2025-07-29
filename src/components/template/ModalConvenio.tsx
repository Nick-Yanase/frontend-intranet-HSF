import React from 'react'

export interface ModalConvenioProps {
  convenioSelected: {
    id: number;
    nome: string;
    descricao: string;
    ativo: number;
  }
  setIsModalOpen: (isOpen: boolean) => void;
}
export default function ModalConvenio({convenioSelected, setIsModalOpen} : ModalConvenioProps) {
  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-10 flex items-center justify-center z-50">
      <div className="bg-zinc-800 p-6 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-2xl font-bold mb-4">{convenioSelected.nome}</h2>
        <p className="mb-4">{convenioSelected.descricao}</p>
        <p className={`font-semibold ${convenioSelected.ativo === 1 ? "text-green-500" : "text-red-500"}`}>{convenioSelected.ativo === 1 ? "ativo" : "desativado"}</p>
        <button onClick={() => setIsModalOpen(false)} className="text-zinc-400 text-lg absolute top-2 right-5 cursor-pointer transition-colors hover:text-white"> x </button>
      </div>
    </div>
  )
}
