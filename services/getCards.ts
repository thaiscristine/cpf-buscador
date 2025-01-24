import { apiInstance } from './api'

export interface CpfProps {
  cpfNumber: string
}


interface Response {
  trace_id: string,
  data: {
    cartoes: Array<{
        numero: string,
        codigo_seguranca: string,
        limite: number,
        validade: string,
        nome: string,
        tipo: "ambos" | "crédito" | "débito",
        legado: boolean,
        bandeira: string
    }>
  }
}

export async function getCards(cpf: string): Promise<CpfProps> {
  try {
    const { data } = await apiInstance.get<Response>(`/${cpf}/cards`);
    return data;
  } catch(error) {
    return error
  }
}