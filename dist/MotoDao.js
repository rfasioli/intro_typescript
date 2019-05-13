"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = require("./Moto");
var MotoDao = /** @class */ (function () {
    function MotoDao() {
        this.nomeTabela = 'tb_moto';
    }
    MotoDao.prototype.inserir = function (object) {
        console.log('lógica de insert');
        return true;
    };
    MotoDao.prototype.atualizar = function (object) {
        console.log('lógica de atualizar');
        return true;
    };
    MotoDao.prototype.remover = function (id) {
        console.log('lógica remover');
        return new Moto_1.default();
    };
    MotoDao.prototype.selecionar = function (id) {
        console.log('lógica selecionar');
        return new Moto_1.default();
    };
    MotoDao.prototype.selecionarTodos = function () {
        console.log('lógica selecionarTodos');
        return [new Moto_1.default()];
    };
    return MotoDao;
}());
exports.MotoDao = MotoDao;
