class Aluno {
  /*
   * Construtor da classe Aluno. Recebe dois parâmetros para inicializar
   * os atributos cpf e nome.
   */
  constructor(c, n) {
    this.cpf = c;
    this.nome = n;  
    console.log('Um novo objeto Aluno foi criado!');
  }
  //----------------------------//
  exibir() {
    alert("Executando o método exibir do aluno");    
    alert("this = " + this + "\ncpf = " + this.cpf + "\nnome = " + this.nome);
  }
  //----------------------------//
}

// Sleep Síncrono. Trava todo o sistema
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function promessa(token) {
  return new Promise(
    function(resolve,reject) {
      setTimeout(() => resolve("Feito: " + token), 
        1000);
    });  
}

function promessa2(token) {
  return new Promise(
    function(resolve,reject) {
      if(token == 'X') 
        resolve('Ok'); 
      else 
        reject('Falha');
    });  
}

async function exemplo () {
  try {
    alert(await promessa2('X'));
    alert(await promessa2('Y'));  
  }
  catch(error) { 
    alert('Erro:' + error);
  }
}

//exemplo();

async function exemplo2() {
  try {
    alert( promessa2('X').then( 
      (value) => { alert('Ok: ' + value);}, 
      (value) => { alert('Falha: ' + value);}));
    alert( promessa2('Y').then( 
      (value) => { alert('Ok: ' + value);}, 
      (value) => { alert('Falha: ' + value);}));
    alert( await promessa2('Z') );
  }
  catch(e) { 
    alert('Erro: ' + e);
  }
}

exemplo2();

var aluno1 = new Aluno('123.346.678-09','José da Silva');
var aluno2 = new Aluno('987.654.321-09','Maria de Souza');
//aluno1.exibir();
//aluno2.exibir();


















