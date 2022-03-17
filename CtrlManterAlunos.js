"use strict";

import Aluno from "/Aluno.js";
import DaoAluno from "/DaoAluno.js";
import ViewerAluno from "/ViewerAluno.js";

export default class CtrlManterAlunos {
  
  //-----------------------------------------------------------------------------------------//
  constructor() {

    this.dao = new DaoAluno();
    this.viewer = new ViewerAluno(this);
    //this.viewer.navegar();
  }

  //-----------------------------------------------------------------------------------------//
}

var ctrl = new CtrlManterAlunos();

//------------------------------------------------------------------------//

var aluno1 = new Aluno('12345', '123.456.789-09', 'José da Silva Xavier','jose@eu.com.br','(21)98765-4321');
//aluno1.mostrar();

var aluno2 = new Aluno('67890', '555.555.555-55', 'Maria de Souza','maria@eu.com.br','(21)99999-8888');
//aluno2.mostrar();

ctrl.dao.incluir(aluno1);
ctrl.dao.incluir(aluno2);

ctrl.dao.obterAlunos().then( async (value) => await alert(JSON.stringify(value)) ) ;

aluno2.setNome('Maria de Souza RAMOS');
ctrl.dao.alterar(aluno2);

ctrl.dao.obterAlunos().then( async (value) => await alert(JSON.stringify(value)) ) ;

ctrl.dao.excluir(aluno1);
ctrl.dao.excluir(aluno2);

ctrl.dao.obterAlunos().then( async (value) => await alert(JSON.stringify(value)) ) ;






























