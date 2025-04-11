import { StatusCPF } from "../enum/cpfStatus.enum";

export interface Cooperado {
    nome: string;
    cpf: string;
    situacaoCPF: StatusCPF;
    contaAplicacao: string;
    contaCorrente: string;
}