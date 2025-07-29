'use client'
import CardConvenio from "@/components/CardConvenio";
import Footer from "@/components/template/Footer";
import Header from "@/components/template/Header";
import ModalConvenio from "@/components/template/ModalConvenio";
import Template from "@/components/template/Template";

import { useEffect, useState } from "react";

type Convenio = {
  id: number;
  nome: string;
  descricao: string;
  ativo: number;
};

export default function Home() {
  const [convenios, setConvenios] = useState<Convenio[]>([]);
  const [convenioSelected, setConvenioSelected] = useState<Convenio | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const [form, setForm] = useState({ id: 0, nome: '', descricao: '' });
  // const [editMode, setEditMode] = useState(false);

  // const API_BASE = 'http://172.16.12.11/intranet-backend/convenio';

  useEffect(() => {
    fetchConvenios();
  }, []);
  
  const handleModal = (convenio: Convenio) => {
    setConvenioSelected(convenio)
    setIsModalOpen(!isModalOpen);
  }

  const fetchConvenios = async () => {
    const res = await fetch(`http://localhost/backend-intranet-HSF/convenio/index.php`);
    const data = await res.json();
    setConvenios(data);
  };

  return (
    
      <Template className="my-10">
        <main className="w-full h-[600px] flex items-center justify-center gap-4">
          {
            convenios.map((convenio: Convenio) => (
              <CardConvenio 
                convenio={convenio} 
                handleModal={() => handleModal(convenio)} 
              />
            ))
          }
        </main>

        {isModalOpen && convenioSelected && (
          <ModalConvenio
            convenioSelected={convenioSelected}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </Template>
     
  );
}
