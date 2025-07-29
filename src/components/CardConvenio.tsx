import React from 'react'
export interface CardConvenioProps {
  convenio: {
    id: number;
    nome: string;
    descricao: string;
    ativo: number;
  };
  handleModal: () => void; 
}
export default function CardConvenio({convenio, handleModal}: CardConvenioProps) {

  
  return (
    <div key={convenio.id} className="w-72 h-fit p-6 rounded-2xl shadow-lg flex flex-col justify-between bg-zinc-900 cursor-pointer gap-2">
      <p className="text-lg text-white font-bold">{convenio.nome}</p>
      
      <button onClick={handleModal} className='bg-green-600 px-8 py-2 flex items-center justify-center rounded-2xl font-semibold cursor-pointer'> Consultar </button>
    </div>
  )
}
