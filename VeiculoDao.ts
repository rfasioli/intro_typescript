import { DaoInterface } from "./DaoInterface";

export class VeiculoDao implements DaoInterface {
    nomeTabela: string = 'tb_veiculo';
    
    inserir(object: any): boolean {
        throw new Error("Method not implemented.");
    }
    atualizar(object: any): boolean {
        throw new Error("Method not implemented.");
    }
    remover(id: number) {
        throw new Error("Method not implemented.");
    }
    selecionar(id: number) {
        throw new Error("Method not implemented.");
    }
    selecionarTodos(): [any] {
        throw new Error("Method not implemented.");
    }


}