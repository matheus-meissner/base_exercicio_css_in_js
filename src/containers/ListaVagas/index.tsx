// ListaVagas.tsx
import React from 'react'
import { ListaWrapper } from '../../styles/ListaVagas'
import Vaga from '../../components/Vaga'

interface VagaProps {
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

interface ListaVagasProps {
  vagas: VagaProps[]
}

const ListaVagas: React.FC<ListaVagasProps> = ({ vagas }) => {
  return (
    <ListaWrapper>
      {vagas.map((vag) => (
        <Vaga
          key={vag.id}
          titulo={vag.titulo}
          localizacao={vag.localizacao}
          nivel={vag.nivel}
          modalidade={vag.modalidade}
          salarioMin={vag.salarioMin}
          salarioMax={vag.salarioMax}
          requisitos={vag.requisitos}
        />
      ))}
    </ListaWrapper>
  )
}

export default ListaVagas
