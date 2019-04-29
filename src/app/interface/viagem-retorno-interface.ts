import { IVeiculo } from './veiculo-interface';

export interface IViagemRetorno {
    id: string,
    veiculo: IVeiculo,
    valor: number,
    chegada: number,
    status: string
}