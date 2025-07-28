'use client'
import Footer from "@/components/template/Footer";
import Header from "@/components/template/Header";

import { useEffect, useState } from "react";

type Convenio = {
  id: number;
  nome: string;
  descricao: string;
  ativo: number;
};

export default function Home() {
  const [convenios, setConvenios] = useState<Convenio[]>([]);
  // const [form, setForm] = useState({ id: 0, nome: '', descricao: '' });
  // const [editMode, setEditMode] = useState(false);

  // const API_BASE = 'http://172.16.12.11/intranet-backend/convenio';

  useEffect(() => {
    fetchConvenios();
  }, []);

  const fetchConvenios = async () => {
    const res = await fetch(`http://172.16.12.15/intranet-backend-teste/convenio/index.php`);
    const data = await res.json();
    setConvenios(data);
  };

  return (
    <>
      <Header />
      <main className="w-full h-[600px] flex items-center justify-center gap-4">
        {
          convenios.map((convenio: Convenio) => (
            <div key={convenio.id} className="w-72 h-fit p-6 rounded-2xl shadow-lg flex flex-col justify-between bg-zinc-900 cursor-pointer gap-2">
              <p className="text-lg text-white font-bold">{convenio.nome}</p>
              <p className="text-zinc-500">{convenio.descricao}</p>
              <p className={`font-semibold ${convenio.ativo === 1 ? "text-green-500" : "text-red-500"}`}>{convenio.ativo === 1 ? "ativo" : "desativado"}</p>
            </div>
          ))
        }
      </main>
      <Footer />
    </>
    
  );
}
