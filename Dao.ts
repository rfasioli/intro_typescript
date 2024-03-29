import { GenericDaoInterface } from "./GenericDaoInterface";

export class Dao<T> implements GenericDaoInterface<T> {
    nomeTabela: string = '';
    
    inserir(object: T): boolean {
        console.log('lógica de insert')
        return true
    }

    atualizar(object: T): boolean {
        console.log('lógica update')
        return true
    }

    remover(id: number): T {
        console.log('lógica delete')
        return Object();
    }

    selecionar(id: number): T {
        console.log('lógica select')
        return Object();
    }

    selecionarTodos(): [T] {
        console.log('lógica getAll') 
        return [Object()]
    }

}