var myName = ("Bruno")
//De nome as variaveis usando o padrão ECMAScript
//ECMAScript 6:
// uso do let e do const para declarar as variaveis.
//VAR: Escopo: Global, Escopo de Função, Escopo Livre, Pode ser Resignificado, Pode ser hospedado
//LET: NÃO tem escopo global, Não pode ser redeclarado, não pode ser hospedado
//CONST: NÃO tem escopo global, Não pode ser ressignificado, Não pode ser redeclarado, não pode ser hospedado

console.log(myName);

//Bloco de código: ESCOPO!
{
    var age = 35
}
console.log(age)
//Isso funciona!!, mesmo fora do escopo ele vai.
//No var, existe pode debaixo dos panos uma declaração fora de todos os escopos, por isso globais.

/*{
    let age1 = 35
}
console.log(age1)*/
//Isso NÃO funciona!!, o let e o const não vão!!

var noAtt
//Existe uma váriavel sem valor de nome noAtt
//Isso não existe no const!!!!

//// ------   Fim do video 2 -------

//JS == linguagem tipada!!
//Q quer dizer... que tem tipos de variaveis oras!!!

//Objeto é a declaração de um tipo de dados que pode ser instânciada, ex.:
var person = {
    "name" : "Bruno",
    "age" : 35
}
//Lembra de um tal de json??

// (typeof "nome da var") => retorna o tipo do objeto a direita.

//null != undefined
//null é objeto

//// ------   Fim do video 3 -------

//Operadores:
    //Aritméticos
//adição: +
//subtração: -
//Multiplicação: *
//Divisão: /
//Resto: %
//Incremento: ++ (soma a variavel 1; uso ++"variavel")
//decremento:-- (subtrai a variavel 1; uso --"variavel")

    //Atribuição
// Use o = para dizer que a var recebe o valor ou caracteres ou bool ou seja lá o que o tipo dela aceitar....

    //Comparação
// Se =, use ==
// Se quer saber o tipo e valor: ===
// != para diferente de.
// os maior, e talz padrão

    //Operadores lógicos:
// e ou &&
// ou ou ||
// ! <- negação, igualzinho no kotlin

//// ------   Fim do video 4 -------

//if, o famoso se, se isso faça isso ... else.. e talz...
//else if, a lá elif do python,
//switch a lá when do kotlin, mas tem um tal de break... meio tosco.. mas blz.
    var mes = "janeiro"

    switch (mes){
        case "janeiro":
            console.log("mês 1");
            break; //Se não por ele fica esperando...
        case "fevereiro":
            console.log("mês 2");
            break;       
        default: //Em caso de nenhuma condição ser correspondente
            console.log("Nada acima atendido")
            break;
    }

//// ------   Fim do video 5 -------

//for => obrigatório, passar a var e o indice de começo, condicional de execução e passo.
var colors = ["black", "white", "yellow", "green", "blue"]

//Se liga q o ++ está a direita da var de passo.
for (var i=0; i<colors.length; i++){
    console.log(colors[i])
}
 
//Obvio, mas bom comentar, 4 funciona fora do contexto de array se vc bolar uma lógica q faz sentido, tipo o indice vai aumentando a cada repetição.
//Quase transformar o 4 num while...

//Alias tb tem o while, uso padrão...
//Ex.:
var x = 0
while (x<10){
    console.log(x);
    x++
}

//Do while, use a palavra reservada do, é tipo o while, mas de ponta cabeça...
//Ex.:

var f = 1;
do {
  console.log(f);
  //Se liga q o ++ está a direita da var.
  f++;
}while (f<10)

//Primeiro faz, depois verifica se vai fazr de novo ou para por aí... peculiar... eu diria...


//// ------   Fim do video 6 -------

//funções: palavra reservada: function, padrão nomear como verbo ou descrição do que ela faz. Fora isso padrãozão de uso.


//// ------   Fim do video 7 -------

//JS agora, depois da ECMAScript 6, é OO (orientada a objeto)

//Ex. de criação de uma classe de livros.
//Criação da classe de objetos
class Book{
    constructor (title, author, pages){
        this.title = title
        this.author = author
        this.pages = pages
    }
    //Funções relativas a esse objeto
    read() {
        return 'Estou lendo ${this.title}'
    }
}

//Instanciamento de um objeto de classe Book com  nome fistBook
let firstBook = new Book ('Algoritmos para viver', 'Brian', 500);

//Impressão chamando o metodo interno ao objeto.
console.log(firstBook.read())


//Herança de classes:

class ItBook extends{
    constructor (title, author, pages, techonology)
        super (title, author, pages)
        this.techonology = techonology
    }
}

//Aqui declaramos como no anterior,
let iTbook = new ItBook('Algoritmos para viver', 'Brian', 500, 'Algoritmos')
//Aqui usamos uma operação que foi herdada de Book e não declarada aqui
console.log(firstBook.read())

//Encapsulamento

class Person {
    constructor (name){
        //Esse _name faz com que a propriedade fique definida mas só acha se usar o get..
        //Essas paradas servem para encapsular logicas que escondem variaveis, só tornando acessiveis depois de ser exec. alguma operação, por exemplo.
        this._name = name
    }
    
    //Função que libera dentro de uma parte de codigo...
    get name(){
        return this._name
    }

    //Essa é uma parada que pode ser chamada de atualização. Vc, nesse caso está atualizando o parametro name
    set name(value){
        this._name = value;
    }

}

let person = new Person('Bruno')

//// ------   Fim do video 8 -------