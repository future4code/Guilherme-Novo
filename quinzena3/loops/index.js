// console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!");

// Exercício 1:

// let valor = 0
// for(let i = 0; i < 4; i++) {
//   valor += i
// }
// console.log(valor)

//a- A variável começa no 0 e vai até menor que 5. Vai passando por todos os 
//numeros até completar o loop. O valor final é 10.

// Exercício 2:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//a - Vai ser impresso os números 19, 21, 23, 25, 27, 30. A condição if é maior que 18
//b - Se eu quisesse adicionar o indice de cada elemento, poderia fazer com o for ou for of;

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (i = 0; i < lista.length; i++ ) {
// 	}
//   console.log(lista)

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     if (numero > 0) {
// 		console.log(numero)
// 	}
// }

// -------------------------------------
// Exercício 3:

// A: 
// const array = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 90]

//     for(let i = 0; i <= array.length; i++){
//         const numeros = array[i] 
//         console.log(numeros)
//     }    

// B: 

// const array = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 90]

//     for(let i = 0; i <= array.length; i++){
//         const numeros = array[i] / 10 
//         console.log(numeros)
//     } 

// c:

// const array = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 90]
// let numerosPar = []
//     for(let i = 0; i < array.length; i++){
//     numerosPar = array[i]
//        if(numerosPar % 2 === 0){
//            console.log(numerosPar)
//        } 
//     }
    
// D: 
// const numero = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 90]

//     for(let i = 0; i < numero.length; i++){
//     const elemento = numero[i]
//         console.log("O elemento do index", i, "é", elemento)
//     } 

// e:

// const numero = [70, 80, 21, 22, 20, 19, 50, 30, 35, 40, 45, 90, 55, 60, 65, 75, 95]
// let valorMaximo = 0
// let valorMinimo = 100
//     for(let i = 0; i < numero.length; i++){
        
//         if(valorMaximo < numero[i]){
//             valorMaximo = numero[i]
//         }

//         else if(valorMinimo > numero[i]) {
//             valorMinimo = numero[i]
//         }
//     }
    
//     console.log(valorMaximo)
//     console.log(valorMinimo)

// Desafio 1: Vai imprimir 4 linhas com 4 zeros;

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha = linha + "0"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Desafio 2 (Não consegui terminar):

// console.log("Vamos jogar!");

//     const numeroUsuario = Number(prompt("Coloque um número"));
//     const numeroUsuario2 = Number(prompt("Chute um número"));

    
    
//     const resultado = numeroUsuario2
//         console.log("O numero chutado foi:", resultado);
                
//                 if (resultado > numeroUsuario)
//                 console.log("Errrrou, o número é menor!");
                
//                 if (resultado < numeroUsuario)
//                 console.log("Errouuuu, o número é maior"); 
                            
//                 else (resultado === numeroUsuario)
//                 console.log("Acertou!")
                
//                 if(confirm("Quer iniciar uma nova rodada?")){
                    
//                 }

    


    

    