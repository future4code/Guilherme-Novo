
// function maiorQueDez(numero) {
//     if(numero > 10){
//         console.log("É maior que dez")
//     }else if(numero < 10) {
//         console.log("É menor que dez")
//     }
// }    


// maiorQueDez(Number(prompt("Coloque um número?")));

//      const array = ["amanda", "pedro", "guilherme"];
//          for (let elemento of array){
//         elemento.length
//         console.log(elemento)
//     }
        
    // let array = [1, 2, 3, 4, 5, 6, 7]
    //     for (let i = 0; i <= array.length; i++){
    //         if(i % 2 ===0){
    //             console.log(i)
    //         }
            
    // }
     
//     const numeros =  (quantidadeDeNumerosPares) => {
//         let i = 0
//         while(i <= quantidadeDeNumerosPares) {
//             console.log(i*2)
//             i++
//     }
// }  
    

// function triangulo(a, b, c){
//         if(a === b && b === c){
//             console.log("O seu triângulo é um Equilátero")
//         }if (a === b){
//             console.log("Seu triângulo é um isósceles")
//         }else if (a !== b !== c){
//             console.log("Seu triângulo é um Escaleno")
//         }else{console.log()}                
//     }   

   
//     triangulo(2, 2, 4)

// function programa (menor, maior) {
//     if(menor < maior){
//     console.log(`O maior é ${maior}`)
//     }if(menor % maior !== 0){
//         console.log(`${menor} não é divisível por ${maior}`)
//     }if (maior%menor === 0){
//         console.log(`${maior} é divisível por ${menor}`)
//     }else (maior - menor)
//         console.log(`A diferença entre eles é ${maior - menor}`)
//     }
// programa (15, 30)


// let numeros = [1, 50, 3, 10, 5, 6, 7, 20]
// let maiorNumero = 0
//     for(let i = 0; i < numeros.length; i++){
//         if(numeros.length > maiorNumero){
//             maiorNumero = numeros[i] - Max.length

//         }
        
//     }
    
//     console.log(maiorNumero)


// let hello = () => {
//     console.log("Hello Labenu!")
// }

// hello();

// let hello = function(){
//     console.log("hello")
// }

// hello()

// function criarRetangulo(lado1, lado2){
//     const retangulo = {
//         largura: lado1,
//         altura: lado2,
//         perimetro: 2 * (lado1 + lado2),
//         area: lado1 * lado2
//     }
//     return retangulo
// }

// const filmeFavorito = {
//     nome: "Whisplash",
//     ano: 2014,
//     diretor: "Damien Chazelle",
//     ator1: "J. K. Simmons",
//     ator2: "Milles Teller"
// }

// console.log(`Venha assistir ao filme ${filmeFavorito.nome}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.ator1} e ${filmeFavorito.ator2}`);

    // const qualquerPessoa = {
    //     nome: "João",
    //     idade: 32,
    //     email: "joao@gmail.com",
    //     endereco: "Avenida São Paulo"
    // }


    // const anonimo = {
    //     ...qualquerPessoa,
    //     nome: "Anônimo"
    // }
 
    // console.log(anonimo)
    
    


    // const informacao = [
    //     { nome: "Pedro", idade: 20 },
    //     { nome: "João", idade: 10 },
    //     { nome: "Paula", idade: 12 },
    //     { nome: "Artur", idade: 89 } 
    // ]
    
    // function arrayDeAdultos(informacao){
    //     let adultos = []
    //     for(elementos of informacao){
    //         if(elementos.idade >= 20){
    //             adultos.push(elementos)
    //         }
    //     }
    //     return adultos
    // }

    // function arrayDeJovens(informacao){
    //     let crianças = []
    //     for(elemento of informacao){
    //         if(elemento.idade < 20){
    //             crianças.push(elemento)
    //         }
    //     }
    //     return crianças
    // }

    // const array = [1, 2, 3, 4, 5, 6]

    // const callback = (lista, index, arrays) => {
    //     return lista * 3
    // }
  
    // const arrayTriplo = array.map(callback);

    // console.log(arrayTriplo)
    
    // const array = [1, 2, 3, 4, 5, 6]

    
    // function arrayEscrito (array){
    //     let array1 = []
    //     for(numeros of array){
    //         if(numeros % 2 === 0){
    //             array1.push(`${numeros} é par`)
    //         }else {
    //             array1.push(`${numeros} é impar`)
    //         }
    //     }
    //     return array1
    // }

    // const teste = arrayEscrito(array)
    // console.log(teste)


    // const pessoas = [
    //     { nome: "Paula", idade: 12, altura: 1.8},
    //     { nome: "João", idade: 20, altura: 1.3},
    //     { nome: "Pedro", idade: 15, altura: 1.9},
    //     { nome: "Luciano", idade: 22, altura: 1.8},
    //     { nome: "Artur", idade: 10, altura: 1.2},
    //     { nome: "Soter", idade: 70, altura: 1.9}
    // ]

    // const pessoasAutorizadas = (crianças, index, array) => {
    //     if(crianças.altura < 1.5 || crianças.idade < 14 || crianças.idade > 60){
    //         return false
    //     }
    //     return true
    // }
    
    // const autorizados = pessoas.filter(pessoasAutorizadas)
    // console.log(autorizados)

    // const pessoas = [
    //     { nome: "Paula", idade: 12, altura: 1.8},
    //     { nome: "João", idade: 20, altura: 1.3},
    //     { nome: "Pedro", idade: 15, altura: 1.9},
    //     { nome: "Luciano", idade: 22, altura: 1.8},
    //     { nome: "Artur", idade: 10, altura: 1.2},
    //     { nome: "Soter", idade: 70, altura: 1.9}
    // ]
    
    // const autorizados = pessoas.filter((crianças, index, array) => {
    //     if(crianças.altura < 1.5 || crianças.idade < 14 || crianças.idade > 60){
    //         return true
    //     }
    //     return false
    // })
    
    // console.log(autorizados)

    // const consultas = [
    //     { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    //     { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    //     { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    //     { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
    // ]

    // const consultas1 = (pessoas, index, array) => {
    //     if(pessoas.cancelada === true){
    //         return console.log(`Olá, ${pessoas.nome}. Infelizmente, sua consulta marcada
    //         para o dia ${pessoas.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
    //         contato conosco para remarcá-la`)
    //     }
    //     else if(pessoas.genero === "masculino"){
    //         pessoas.genero = "lembrá-lo"
    //     }else{
    //         pessoas.genero = "lembrá-la"
    //     }
    //         return console.log(`Olá, ${pessoas.nome}. Estamos enviando esta mensagem para
    //         ${pessoas.genero} da sua consulta no dia ${pessoas.dataDaConsulta}. Por favor, acuse
    //         o recebimento deste e-mail`)
    //     }

        // const resumoDeConsultas = consultas.filter(consultas1)
    

        // const contas = [
        //     { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
        //     { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
        //     { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
        //     { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
        //     { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
        //     { cliente: "Soter", saldoTotal: 1200, compras: [] }
        //   ]
          
        //   const contas1 = (elemento, index, array) => {
        //       let debito = 0;
        //       for(const compras of elemento.compras){
        //         debito = debito + compras 
        //       }
        //     elemento.saldoTotal -= debito   
        //     }
        
        //     contas.forEach(contas1)
        //     console.log(contas)

        