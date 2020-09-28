/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem-vindo ao jogo de BlackJack");
   
   if(confirm("Quer iniciar uma nova rodada?")) {
      const cartaDoUsuario = comprarCarta()
            cartaDoUsuario2 = comprarCarta()
               cartaMaquina = comprarCarta()
                  cartaMaquina2 = comprarCarta();
            
      const resultadoUsuario = cartaDoUsuario.valor + cartaDoUsuario2.valor;
            resultadoMaquina = cartaMaquina.valor + cartaMaquina2.valor;
            console.log("Carta do usuário:", cartaDoUsuario.texto, cartaDoUsuario2.texto, " - pontuação:", resultadoUsuario);
            console.log("Carta da Máquina:", cartaMaquina.texto, cartaMaquina2.texto, " - pontuação:", resultadoMaquina);

      if (resultadoUsuario > 21)
         console.log("Computador venceu!");

      else if(resultadoMaquina > 21)
         console.log("Usuário Venceu!");
         
      else if (resultadoMaquina === resultadoUsuario)
         console.log("Empate!");

      else if (resultadoUsuario > resultadoMaquina)
         console.log("Usuário Venceu!");

      else 
         console.log("Computador Venceu!");  
      
      }
      else {
         console.log("O jogo acabou!");
}
      
   

   