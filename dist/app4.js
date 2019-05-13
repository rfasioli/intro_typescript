"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDao_1 = require("./ConcessionariaDao");
var Concessionaria_1 = require("./Concessionaria");
var PessoaDao_1 = require("./PessoaDao");
var Pessoa_1 = require("./Pessoa");
var Dao_1 = require("./Dao");
var dao = new ConcessionariaDao_1.ConcessionariaDao();
var concessionaria = new Concessionaria_1.default('', []);
dao.inserir(concessionaria);
var dao2 = new PessoaDao_1.PessoaDao();
var pessoa = new Pessoa_1.default('', '');
dao2.atualizar(pessoa);
var dao3 = new Dao_1.Dao();
dao3.inserir(concessionaria);