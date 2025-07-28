import React from 'react'
export interface CardConvenioProps {
  convenio: {
    id: number;
    nome: string;
    descricao: string;
    ativo: number;
  };
}
export default function CardConvenio(props: CardConvenioProps) {
  const { convenio } = props;
  return (
    <div key={convenio.id} className="w-72 h-fit p-6 rounded-2xl shadow-lg flex flex-col justify-between bg-zinc-900 cursor-pointer gap-2">
      <p className="text-lg text-white font-bold">{convenio.nome}</p>
      <p className="text-zinc-500">{convenio.descricao}</p>
      <p className={`font-semibold ${convenio.ativo === 1 ? "text-green-500" : "text-red-500"}`}>{convenio.ativo === 1 ? "ativo" : "desativado"}</p>
    </div>
  )
}
