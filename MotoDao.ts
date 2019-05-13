import { DaoInterface } from "./DaoInterface";
import Moto from "./Moto";

export class MotoDao implements DaoInterface {
    nomeTabela: string = 'tb_moto';
    
    inserir(object: any): boolean {
        console.log('lógica de insert')
        return true
    }

    atualizar(object: any): boolean {
        console.log('lógica de atualizar')
        return true
    }

    remover(id: number) {
        console.log('lógica remover');
        return new Moto();
    }

    selecionar(id: number) {
        console.log('lógica selecionar');
        return new Moto();
    }

    selecionarTodos(): [any] {
        console.log('lógica selecionarTodos');
        return [new Moto()];
    }

}