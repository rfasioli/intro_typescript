import { DaoInterface } from "./DaoInterface";
import Carro from "./Carro";

export class CarroDao implements DaoInterface {
    nomeTabela: string = 'tb_carro';
    
    inserir(object: any): boolean {
        console.log('lógica de insert')
        return true
    }

    atualizar(object: any): boolean {
        console.log('lógica de atualizar')
        return true
    }

    remover(id: number): any {
        console.log('lógica remover');
        return new Carro('', 0);
    }

    selecionar(id: number): any {
        console.log('lógica selecionar');
        return new Carro('', 0);
    }

    selecionarTodos(): [any] {
        console.log('lógica selecionar');
        return [new Carro('', 0)];
    }


}