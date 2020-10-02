function adicionar(){
    const meuInput = document.getElementById("tarefa"); // precisa pegar o valor do input
    const valorInput = meuInput.value; // pega o valor/elemento do input/entrada  
    const daSemana = document.getElementById("dias-semana") // imprimir o valor no html.
    const diaDaSemana = daSemana.value;
    meuInput != ""
        if(diaDaSemana === 'domingo'){
            const diaSelecionado = document.querySelector(".semana #domingo")
            diaSelecionado.innerHTML += `<li>${valorInput}</li>`; // permite que acesse o html e adicionamos uma tag <li></li>
            diaSelecionado.value;
            meuInput.value = ""
                            
        }

        if(diaDaSemana === 'segunda'){
            const diaSelecionado = document.querySelector(".semana #segunda")
            diaSelecionado.innerHTML += `<li>${valorInput}</li>`; // permite que acesse o html e adicionamos uma tag <li></li>
            diaSelecionado.value;
            meuInput.value = ""
        }

        if(diaDaSemana === 'terca'){
            const diaSelecionado = document.querySelector(".semana #terca")
            diaSelecionado.innerHTML += `<li>${valorInput}</li>`; // permite que acesse o html e adicionamos uma tag <li></li>
            diaSelecionado.value;
            meuInput.value = ""
        }

        if(diaDaSemana === 'quarta'){
            const diaSelecionado = document.querySelector(".semana #quarta")
            diaSelecionado.innerHTML += `<li>${valorInput}</li>`; // permite que acesse o html e adicionamos uma tag <li></li>
            diaSelecionado.value;
            meuInput.value = ""
        }

        if(diaDaSemana === 'quinta'){
            const diaSelecionado = document.querySelector(".semana #quinta")
            diaSelecionado.innerHTML += `<li>${valorInput}</li>`; // permite que acesse o html e adicionamos uma tag <li></li>
            diaSelecionado.value;
            meuInput.value = ""
        }

        if(diaDaSemana === 'sexta'){
            const diaSelecionado = document.querySelector(".semana #sexta")
            diaSelecionado.innerHTML += `<li>${valorInput}</li>`; // permite que acesse o html e adicionamos uma tag <li></li>
            diaSelecionado.value;
            meuInput.value = ""
        }
        
        if(diaDaSemana === 'sabado'){
            const diaSelecionado = document.querySelector(".semana #sabado")
            diaSelecionado.innerHTML += `<li>${valorInput}</li>`; // permite que acesse o html e adicionamos uma tag <li></li>
            diaSelecionado.value;
            meuInput.value = ""
        }

        if(valorInput === ""){
            alert("Campo Vazio")     
        }
    }


