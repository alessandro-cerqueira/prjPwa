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

//---------------------------------------------------------------
// Exemplo de execução assíncrona sem Promise

function funcD() {
  console.log("Sou a funcD");
}

function funcC() {
  console.log("Sou a funcC");
}

async function funcA() {
  await funcC();
  console.log(2);
  await undefined;
  console.log(4);
}

async function funcB() {
  console.log(1);
  await undefined;
  console.log(3);
}

//funcA();
//funcB(); // Irá escrever 1, 2, 3, 4 na console
//funcD();

//---------------------------------------------------------------

// Sleep Síncrono. Trava toda single thread
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

//---------------------------------------------------------------

function promessaAlternativa(token) {
  return new Promise(
    function(resolve,reject) {
      if(token == 'X') 
        resolve('Ok'); 
      else 
        reject('Falha');
    });  
}

function funcProm(token) {

  return new Promise(
    // A função assíncrona vinculada à Promise irá dormir por 1 segundo para
    // depois escrever na console e executar a função resolve;
    function(resolve,reject) {
//      setTimeout(() => { resolve("Feito: " + token) }, 
//        1000);
      resolve("Feito: " + token);
    });  

}

async function exemplo () {
  try {
    let resultado = funcProm('X');
    console.log( "a) resultado = " + resultado ); // Lista 'Promise'
    console.log('ESTOU NO MEIO');
    console.log( "b) resultado = " + await resultado ); // Lista o 'Resolve' da Promise
    console.log( await funcProm('Y'));  
    console.log( "c) resultado = " + resultado ); // Lista 'Promise'
  }
  catch(error) { 
    alert('Erro:' + error);
  }
}

exemplo();
console.log("Após a chamada de exemplo...");

//------------------------------------------------------------

function promessa2(token) {
  return new Promise(
    function(resolve,reject) {
      if(token == 'X') 
        resolve('Ok'); 
      else 
        reject('Falha');
    });  
}

async function exemplo2() {
  try {
    // Para Token = x
    console.log( promessa2('X').then( 
      (value) => { console.log('Ok: ' + value);}, 
      (value) => { console.log('Falha: ' + value);}));
    
    // Para Token = Y
    console.log( promessa2('Y').then( 
      (value) => { console.log('Ok: ' + value);}, 
      (value) => { console.log('Falha: ' + value);}));
    
    // Para Token = Z
    console.log( await promessa2('Z') );
  }
  catch(e) { 
    console.log('Erro: ' + e);
  }
}

//exemplo2();

//------------------------------------------------------------

//var aluno1 = new Aluno('123.346.678-09','José da Silva');
//var aluno2 = new Aluno('987.654.321-09','Maria de Souza');
//aluno1.exibir();
//aluno2.exibir();


















